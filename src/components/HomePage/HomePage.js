import React from 'react'
import Navigation from './Navigation/Navigation'
import HomeBody from './HomeBody/HomeBody'
import './styles.css'
export default function HomePage() {
  return (
    <div id='homePage'>
      <Navigation />
      <HomeBody />
    </div>
  )
}
