import React from 'react'
import './styles.css'
import SpotifyPlaylistCard from './SpotifyPlaylistCard/SpotifyPlaylistCard'
import { NavLink } from 'react-router-dom'
export default function SpotifyPlaylistBody({data , playingSong, setPlayingSong}) {
  const {playlistName, songs, _id} = data
  let count = 0
  return (
    <div className = 'SpotifyPlaylistBody'>

      <div className='SpotifyPlaylistBodyHeadingShowAll'>
        <span className='SpotifyPlaylistBodyHeading'>{playlistName}</span>
        <NavLink to={`spotifyPlaylist/${_id}`}><span className='SpotifyPlaylistBodyShowAll'>Show All</span></NavLink>
      </div>
      
      <div className='SpotifyPlaylistBodyCardsArray'>
        {
        songs.map(function(data) {
          count++
          if(count >= 6)
          return<></>
          else
          return <SpotifyPlaylistCard songId={data} key={data} playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        })}
        {/* <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/>
        <SpotifyPlaylistCard/> */}
      </div>

    </div>
  )
}
