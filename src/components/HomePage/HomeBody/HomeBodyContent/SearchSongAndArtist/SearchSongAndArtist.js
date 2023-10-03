import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaListUl } from 'react-icons/fa'


export default function SearchSongAndArtist({playingSong,setPlayingSong}) {

  const  [foundSpotifyPlaylist, setFoundSpotifyPlaylist] = useState([])
  const [foundSongs, setFoundSongs] = useState([]) 
  const [foundArtist, setFoundArtist] = useState([]) 
  const { artistId } = useParams()

  async function getSongs(){
    const tempSongs = await axios.post('http://localhost:8000/search/song',{'searchValue':document.getElementById('searchInput').value})
    setFoundSongs(tempSongs.data)
    console.log('song',tempSongs);
  }

  async function getArtists(){
    const tempSongs = await axios.post('http://localhost:8000/search/artist',{'searchValue':document.getElementById('searchInput').value})
    setFoundArtist(tempSongs.data)
    console.log('artis',tempSongs);
  }

  async function getSpotifyPlaylists(){
    const tempSongs = await axios.post('http://localhost:8000/search/spotifyPlaylist',{'searchValue':document.getElementById('searchInput').value})
    setFoundSpotifyPlaylist(tempSongs.data)
    console.log('playlist',tempSongs);
  }

  function searchValueChanged(){
    const searchValue = document.getElementById('searchInput').value
    if(searchValue === '')
    {
      setFoundSongs([])
      setFoundArtist([])
      setFoundSpotifyPlaylist([])
      return
    }
    getSongs()
    getArtists()
    getSpotifyPlaylists()
  }

  useEffect(()=>{
    const searchValue = document.getElementById('searchInput').value
    if(searchValue === '')
    {
      setFoundSongs([])
      setFoundArtist([])
      setFoundSpotifyPlaylist([])
      return
    }
    getSongs()
    getArtists()
    getSpotifyPlaylists()
  },[]);

  let count = 0

  return (
    <div id='spotifyPlaylistSongsBody'>
        <div className='playlistAndArtistHeader'>            
            <input type='text' id='searchInput' onChange={searchValueChanged}/>
            <button id='searchPageSearchButton'>Search</button>
        </div>
        <div className='headingOfSongsTableDiv'>
            <div className='headingOfSongsTable' id='topRowSongsTable'>
                <div className='headingOfSongsTableHash'>#</div>
                <div className='headingOfSongsTableTitle'>Title</div>
                <div className='headingOfSongsTableArtist'>Artist</div>
                {/* <div className='headingOfSongsTableDuration'>Duration</div> */}
            </div>
            { foundSongs.map(function(data) {
                count++
                return <div className='headingOfSongsTable songsOfSongsTable' key={data} onClick={()=>setPlayingSong(data)}>
                            <div className='headingOfSongsTableHash'>{count}</div>
                            <div className='headingOfSongsTableTitle'>
                                <img src={data.imageUrl} className='songsTableTitleImage'></img>
                                <h4 style={{'margin':'0px'}}>{data.songName}</h4>
                            </div>
                            <div className='headingOfSongsTableArtist'>{data.artist.map(function(data2){
                                return <a href={`../../artistSongs/${data2.artistId}`}>{data2.artistName}</a>
                            })}</div>
                            {/* <div className='headingOfSongsTableDuration'>3:00</div> */}
                        </div>
            })}

            { foundArtist.map(function(data) {
                count++
                return <a href={`../artistSongs/${data._id}`}>
                        <div className='headingOfSongsTable songsOfSongsTable' key={data}>
                            <div className='headingOfSongsTableHash'>{count}</div>
                            <div className='headingOfSongsTableTitle'>
                                <img src={data.imageUrl} className='songsTableTitleImage'></img>
                                <h4 style={{'margin':'0px'}}>{data.artistName}</h4>
                            </div>
                            {/* <div className='headingOfSongsTableDuration'>3:00</div> */}
                        </div>
                        </a>
            })}

            { foundSpotifyPlaylist.map(function(data) {
                count++
                return <a href={`../spotifyPlaylist/${data._id}`}>
                        <div className='headingOfSongsTable songsOfSongsTable' key={data}>
                            <div className='headingOfSongsTableHash'>{count}</div>
                            <div className='headingOfSongsTableTitle'>
                                <FaListUl className='songsTableTitleImage' />
                                <h4 style={{'margin':'0px'}}>{data.playlistName}</h4>
                            </div>
                            {/* <div className='headingOfSongsTableDuration'>3:00</div> */}
                        </div>
                      </a>
            })}

        </div>
    </div>
  )
}
