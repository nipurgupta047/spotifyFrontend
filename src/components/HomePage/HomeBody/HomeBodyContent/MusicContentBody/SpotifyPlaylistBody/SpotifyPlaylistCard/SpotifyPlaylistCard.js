/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import axios from 'axios'
import './styles.css'

export default function SpotifyPlaylistCard({songId, playingSong, setPlayingSong}) {
 
  // const {playingSong, setPlayingSong} = useContext(playingSongContext)

  const [song, setSong] = useState({})
  const [artistString, setArtistString] = useState('')
  useEffect(()=>{
    async function getSong(){
      const tempSong = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/song/${songId}`)
      setSong(tempSong.data)
     
      setArtistString('')
      for(let i =0; i<tempSong.data.artist.length; i++){
        setArtistString(prev => prev+tempSong.data.artist[i].artistName)
        if(i<tempSong.data.artist.length-1)
        setArtistString(prev => prev+', ')
      }
    }
    getSong()
    
  },[]);

  function playSong(){
    setPlayingSong(song)
  }

  return (
    <div className='spotifyPlaylistCard'>
      <img src={song.imageUrl} className='spotifyPlaylistCardImage'></img>
      <button className='playButtonOnMusicCard' onClick={playSong}><FaPlay/></button>  
      <h4 className='spotifyPlaylistCardTitle'>{song.songName}</h4>
      <p className='spotifyPlaylistCardArtist'>{artistString}</p>
    </div>
  )
}
