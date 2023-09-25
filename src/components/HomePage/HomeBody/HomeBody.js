import React from 'react'
import './styles.css'
import HomeBodyContent from './HomeBodyContent/HomeBodyContent'

export default function HomeBody({playingSong,setPlayingSong}) {
  return (
    <div id='homeBody'>
      <HomeBodyContent playingSong={playingSong} setPlayingSong={setPlayingSong}/>
    </div>
  )
}
