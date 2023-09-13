import React from 'react'
import './styles.css'
import SpotifyPlaylistBody from './SpotifyPlaylistBody/SpotifyPlaylistBody'
export default function MusicContentBody() {
  return (
    <div id='musicContentBody'>
        <SpotifyPlaylistBody/>
        <SpotifyPlaylistBody/>
        <SpotifyPlaylistBody/>
        <SpotifyPlaylistBody/>
    </div>
  )
}
