import React from 'react'
import './styles.css'
import Navbar from './Navbar/Navbar'
import MusicContentBody from './MusicContentBody/MusicContentBody'

export default function HomeBodyContent() {
  return (
    <div id='homeBodyContent'>
      <Navbar/>
      <MusicContentBody/>
    </div>
  )
}
