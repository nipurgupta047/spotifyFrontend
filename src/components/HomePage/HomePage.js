import React from 'react'
import Navigation from './Navigation/Navigation'
import HomeBody from './HomeBody/HomeBody'
import './styles.css'
export default function HomePage({playingSong,setPlayingSong,getSongsOf,setGetSongsOf}) {
  return (
    <div id='homePage'>
      <Navigation playingSong={playingSong} setPlayingSong={setPlayingSong} getSongsOf={getSongsOf} setGetSongsOf={setGetSongsOf}/>
      <HomeBody playingSong={playingSong} setPlayingSong={setPlayingSong} getSongsOf={getSongsOf} setGetSongsOf={setGetSongsOf}/>
    </div>
  )
}
