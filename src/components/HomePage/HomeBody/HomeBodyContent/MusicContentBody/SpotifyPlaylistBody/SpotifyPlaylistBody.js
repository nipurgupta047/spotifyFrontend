import React from 'react'
import './styles.css'
import SpotifyPlaylistCard from './SpotifyPlaylistCard/SpotifyPlaylistCard'
export default function SpotifyPlaylistBody() {

  return (
    <div className = 'SpotifyPlaylistBody'>

      <div className='SpotifyPlaylistBodyHeadingShowAll'>
        <span className='SpotifyPlaylistBodyHeading'>Your top mixes</span>
        <span className='SpotifyPlaylistBodyShowAll'>Show All</span>
      </div>

      <div className='SpotifyPlaylistBodyCardsArray'>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
      </div>

    </div>
  )
}
