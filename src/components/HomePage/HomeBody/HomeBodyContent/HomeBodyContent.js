import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './styles.css'
import Navbar from '../Navbar/Navbar'
import MusicContentBody from './MusicContentBody/MusicContentBody'
import SpotifyPlaylistsSongs from './SpotifyPlaylistsSongs/SpotifyPlaylistsSongs';
import UserPlaylistSongs from './UserPlaylistSongs/UserPlaylistSongs';
import ArtistSongs from './ArtistSongs/ArtistSongs';
import SearchSongAndArtist from './SearchSongAndArtist/SearchSongAndArtist';



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
          <UserPlaylistSongs playingSong={playingSong} setPlayingSong={setPlayingSong} />
        }/>
        <Route exact path="/artistSongs/:artistId" element={
          <ArtistSongs playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        }/>
        <Route exact path="/search" element={
          <SearchSongAndArtist playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        }/>

        </Routes>
      
    </div>
  )
}
