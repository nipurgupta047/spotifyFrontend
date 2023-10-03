import React from 'react'
import './styles.css'
import HomeAndSearch from './HomeAndSearch/HomeAndSearch'
import Library from './Library/Library'

export default function Navigation({getSongsOf,setGetSongsOf, playingSong,setPlayingSong}) {
  return (
    <div id='navigation'>
        <HomeAndSearch />
        <Library getSongsOf={getSongsOf} setGetSongsOf={setGetSongsOf} playingSong={playingSong} setPlayingSong={setPlayingSong} />
    </div>
  )
}
