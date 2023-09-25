import React from 'react'
import Navigation from './Navigation/Navigation'
import HomeBody from './HomeBody/HomeBody'
import './styles.css'
export default function HomePage({playingSong,setPlayingSong}) {
  return (
    <div id='homePage'>
      <Navigation playingSong={playingSong} setPlayingSong={setPlayingSong}/>
      <HomeBody playingSong={playingSong} setPlayingSong={setPlayingSong}/>
    </div>
  )
}
