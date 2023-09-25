import React from 'react'
import './styles.css'
import Navbar from '../Navbar/Navbar'
import MusicContentBody from './MusicContentBody/MusicContentBody'

export default function HomeBodyContent({playingSong,setPlayingSong}) {
  return (
    <div id='homeBodyContent'>
      <Navbar/>
      <MusicContentBody playingSong={playingSong} setPlayingSong={setPlayingSong}/>
    </div>
  )
}
