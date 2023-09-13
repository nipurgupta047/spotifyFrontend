/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import './styles.css'

export default function SpotifyPlaylistCard() {
  return (
    <div className='spotifyPlaylistCard'>
      <img src='/images/1.jpg' className='spotifyPlaylistCardImage'></img>
      <button className='playButtonOnMusicCard'><FaPlay/></button>  
      <h4 className='spotifyPlaylistCardTitle'>Hannah Montana Mix</h4>
      <p className='spotifyPlaylistCardArtist'>Hannah Montana, Taylor Swift</p>
    </div>
  )
}
