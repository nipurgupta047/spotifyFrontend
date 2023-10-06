import React from 'react'
import './styles.css'
import SongCard from './SongCard/SongCard'
import Controls from './Controls/Controls'
import AddToPlaylist from './AddToPlaylist/AddToPlaylist'
export default function MusicPlayer({playingSong, setPlayingSong}) {
  return (
    <div id='musicPlayer'>
      {playingSong._id==='a'?<div></div>
      :
      <>
        <SongCard playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        <Controls playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        <AddToPlaylist playingSong={playingSong} setPlayingSong={setPlayingSong}/>
      </>
      }

    </div>
  )
}
