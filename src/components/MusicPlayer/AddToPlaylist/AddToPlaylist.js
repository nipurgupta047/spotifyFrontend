import React, { useState, useContext, useEffect }from 'react'
import './styles.css'
import usernameContext from '../../../context'
import axios from 'axios'

export default function AddToPlaylist({playingSong, setPlayingSong}) {

  const [playlists, setPlaylists] = useState([])
  const [userUsername, setUserUsername] = useContext(usernameContext)

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
  fetchPlaylists()
}, [userUsername]);

  async function addToPlaylistFunction(_id){
    try {
        
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addSongToPlaylist`,{
        'username':userUsername,
        '_id':_id,
        'songId':playingSong._id,
        'songName':playingSong.songName,
        'songImageUrl':playingSong.imageUrl
      })
            
      alert(res.data)
    } catch (error) {
      alert('Could not add to playlist. Please try again.')
    }
    return
  }

  return (
    <div id='addToPlaylist'>
      <div class="dropup">
        <button class="dropbtn">Add to Playlist</button>

          <div className='dropup-content'>
          {playlists.map(function(data) {
            return <a key={data} onClick={()=>addToPlaylistFunction(data._id)}>{data.playlistName}</a>
          })}
        </div>
        

        {/* <div class="dropup-content">
          <a>Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div> */}
      </div>
      {/* <button id='addToPlaylistButton' >Add to playlist</button> */}
      
    </div>
  )

}
