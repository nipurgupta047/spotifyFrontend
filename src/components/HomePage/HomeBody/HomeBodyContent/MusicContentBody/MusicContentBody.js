import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import SpotifyPlaylistBody from './SpotifyPlaylistBody/SpotifyPlaylistBody'

export default function MusicContentBody({playingSong,setPlayingSong}) {

  const [spotifyPlaylist, setSpotifyPlaylist] = useState([])
  useEffect(()=>{
    async function getPlaylist(){
      const playlist = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/spotifyPlaylist`)
      setSpotifyPlaylist(playlist.data)
    }
    getPlaylist()
  },[]);

  return (
    <div id='musicContentBody'>
        {spotifyPlaylist.map(function(data) {
            return <SpotifyPlaylistBody data={data} key={data._id} playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        })}
    </div>
  )
}
