import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import { FaPlus, FaArrowRight, FaLayerGroup, FaListAlt, FaList, FaTrash, FaListUl} from 'react-icons/fa'
import usernameContext from '../../../../context'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'

export default function Library({getSongsOf,setGetSongsOf,playingSong,setPlayingSong}) {

    const [likedSongs, setLikedSongs] = useState([])
    const [playlists, setPlaylists] = useState([])
    const [userUsername, setUserUsername] = useContext(usernameContext)
    const [showPlaylist, setShowPlaylist] = useState(false)

    async function fetchLikedSongs(){
      if(userUsername !== ''){
          try{
              const temp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getLikedSongs`,{'username':userUsername})
              setLikedSongs(temp.data)
          }
          catch{
              setLikedSongs([])
          }
      }
  }

  async function fetchPlaylists(){
    if(userUsername !== ''){
        try{
            const temp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getPlaylists`,{'username':userUsername})
            
            setPlaylists(temp.data)
        }
        catch{
          setPlaylists([])
        }
    }
}


    useEffect(()=>{
        fetchLikedSongs()
        fetchPlaylists()
    }, [userUsername]);

    async function createPlaylist(){
      if(userUsername === ''){
        alert('You need to login to create Playlist')
        return
      }
      try {
        
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/createPlaylist`,{
          'username':userUsername,
          'playlistName':document.getElementById('createPlaylistNameInput').value
        })
        document.getElementById('createPlaylistNameInput').value=''
        document.getElementById('createPlaylistDiv').style.display='none'
        fetchPlaylists()
        alert(res.data)
      } catch (error) {
        document.getElementById('createPlaylistDiv').style.display='none'
        alert('Could not create playlist. Please try again.')
      }

    }

    function showPlaylistFunction(){
      if(showPlaylist === false){
        setShowPlaylist(prev=>!prev)
        document.getElementById('showPlaylistCross').style.display='inline-block'
        document.getElementById('showPlaylist').style.backgroundColor='white'
        document.getElementById('showPlaylist').style.color='black'
      }
      else{
        setShowPlaylist(prev=>!prev)
        document.getElementById('showPlaylistCross').style.display='none'
        document.getElementById('showPlaylist').style.backgroundColor=''
        document.getElementById('showPlaylist').style.color=''
      }
    }

    async function deletePlaylistFunction(_id){      
      try {
        
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/deletePlaylist`,{
          'username':userUsername,
          '_id':_id
        })
        if(res)
        fetchPlaylists()
        alert(res.data)
      } catch (error) {
        alert('Could not delete playlist. Please try again.')
      }
      return

    }

    async function changePlayingSong(_id) {
        const fetchSong = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/song/${_id}`)
        if(fetchSong.data)
        setPlayingSong(fetchSong.data)
    }

  return (
    <div id='library'>
      <div id='yourLibrary'>
        <div id='iconAndLabelLibrary'>
            <div id='iconLibrary'>
                <FaLayerGroup />
            </div>
            <p className='yourLibraryWord'>Your Library</p>
        </div>
        <button className='libraryBtn' onClick={()=>{document.getElementById('createPlaylistDiv').style.display="block"}}><FaPlus /></button>
        {/* <button className='libraryBtn'><FaArrowRight /></button> */}
      </div>
      <div id='showPlaylist' onClick={showPlaylistFunction}>Playlist <span id='showPlaylistCross'>x</span></div>

      {showPlaylist === false?
      <div id='libraryItems'>
        
        <div id='createPlaylistDiv'>
          <h3 id='createPlaylistTitle'> Playlist Name</h3>
          <input type='text' name='playlistName' id='createPlaylistNameInput'></input>
          <button id='createPlaylistButton' onClick={createPlaylist}>Create</button>
          <button id='cancelPlaylistButton' onClick={()=>{document.getElementById('createPlaylistDiv').style.display="none"}}>Remove</button>
        </div>

        {likedSongs.map(function(data) {
          return <div className='libraryItemsInner' key={data} onClick={()=>changePlayingSong(data.songId)} >
                    <img src = {data.songImageUrl} id='songLibraryImage'/>
                    <div id='libraryItemsDetails'>
                        {data.songName}
                    </div>
                </div>
        })}
        
      </div>
      :
      <div id='libraryItems'>
        
        <div id='createPlaylistDiv'>
          <h3 id='createPlaylistTitle'> Playlist Name</h3>
          <input type='text' name='playlistName' id='createPlaylistNameInput'></input>
          <button id='createPlaylistButton' onClick={createPlaylist}>Create</button>
          <button id='cancelPlaylistButton' onClick={()=>{document.getElementById('createPlaylistDiv').style.display="none"}}>Remove</button>
        </div>
        {/* <Link to = {`/userPlaylist/${data._id}`}></Link> */}
        {/* <NavLink
                                            aria-current="page"
                                            to="/signup"></NavLink> */}
        {playlists.map(function(data) {
          return <div key={data} onClick={()=>setGetSongsOf(`data._id`)}>
          <NavLink to={`/userPlaylist/${data._id}`}>
          <div className='libraryItemsInner'>
          {/* <img src = {data.songImageUrl} id='songLibraryImage'/> */}
          <FaListUl id='playlistIcon' />
          <div id='libraryItemsDetails'>
              {data.playlistName}
          </div>
          <div id='playlistDeleteIconDiv'>
            <FaTrash id='playlistDeleteIcon' onClick={()=>{deletePlaylistFunction(data._id)}}/>
          </div>
        </div>
        </NavLink>
        </div>
        })}
        
        
      </div>
      }


    </div>
  )
}
