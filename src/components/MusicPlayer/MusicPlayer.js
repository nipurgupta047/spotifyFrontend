import React from 'react'
import './styles.css'
import SongCard from './SongCard/SongCard'
import Controls from './Controls/Controls'
import Volume from './Volume/Volume'
export default function MusicPlayer() {
  return (
    <div id='musicPlayer'>
      <SongCard/>
      <Controls/>
      <Volume/>
    </div>
  )
}
