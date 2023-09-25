import React from 'react'
import './styles.css'
import SpotifyPlaylistCard from './SpotifyPlaylistCard/SpotifyPlaylistCard'
export default function SpotifyPlaylistBody({data , playingSong, setPlayingSong}) {
  const {playlistName, songs} = data
  return (
    <div className = 'SpotifyPlaylistBody'>

      <div className='SpotifyPlaylistBodyHeadingShowAll'>
        <span className='SpotifyPlaylistBodyHeading'>{playlistName}</span>
        <span className='SpotifyPlaylistBodyShowAll'>Show All</span>
      </div>

      <div className='SpotifyPlaylistBodyCardsArray'>
        {songs.map(function(data) {
          // console.log(data);
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
