import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles.css'
import Navbar from '../Navbar/Navbar'
import MusicContentBody from './MusicContentBody/MusicContentBody'
import SpotifyPlaylistsSongs from './SpotifyPlaylistsSongs/SpotifyPlaylistsSongs';
import UserPlaylistSongs from './UserPlaylistSongs/UserPlaylistSongs';
import ArtistSongs from './ArtistSongs/ArtistSongs';



export default function HomeBodyContent({playingSong,setPlayingSong,getSongsOf,setGetSongsOf}) {
  return (
    <div id='homeBodyContent'>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={
          <MusicContentBody playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        }/>
        <Route exact path="/spotifyPlaylist/:playlistId" element={
          <SpotifyPlaylistsSongs playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        }/>
        <Route exact path="/userPlaylist/:userPlaylistId" element={
          <UserPlaylistSongs playingSong={playingSong} setPlayingSong={setPlayingSong} getSongsOf={getSongsOf} setGetSongsOf={setGetSongsOf}/>
        }/>
        <Route exact path="/artistSongs/:artistId" element={
          <ArtistSongs playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        }/>

        </Routes>
      
    </div>
  )
}
