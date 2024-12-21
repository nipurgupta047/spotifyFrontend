import React, { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'


export default function SpotifyPlaylistsSongs({playingSong,setPlayingSong}) {

  const [spotifyPlaylistSongs, setSpotifyPlaylistSongs] = useState([])
  const  [spotifyPlaylist, setSpotifyPlaylist] = useState({})
  const { playlistId } = useParams()
  useEffect(()=>{
    async function getPlaylistSongs(){
      const playlist = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/spotifyPlaylistById/${playlistId}`)
      setSpotifyPlaylist(playlist.data)
      let tempSongs = []
      for (let index = 0; index < playlist.data.songs.length; index++) {
        const element = await getSongById(playlist.data.songs[index])
        tempSongs.push(element)
      }
      setSpotifyPlaylistSongs(tempSongs)
    }
    getPlaylistSongs()
  },[playlistId]);

  async function getSongById(_id){
    const song = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/song/${_id}`)
      return song.data
  }
  let count = 0

  return (
    <div id='spotifyPlaylistSongsBody'>
        <div className='playlistAndArtistHeader'>
            <div className='playlistAndArtistHeaderImageDiv'>
                <img className='playlistAndArtistHeaderImage' src='https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/03/spotify-playlist-cover-80s-pink-jukebox-032322.jpg' />
            </div>
            <div className='playlistAndArtistHeaderTags'>
                <p style={{'margin':'0px', 'fontSize':'16px'}}>Playlist</p>
                <h1 style={{'margin':'0px', 'marginTop':'10px', 'fontSize':'62px'}}>{spotifyPlaylist.playlistName}</h1>
                <p style={{'margin':'0px', 'marginTop':'10px', 'fontSize':'16px'}}>{spotifyPlaylistSongs.length} songs</p>
            </div>
        </div>
        <div className='headingOfSongsTableDiv'>
            <div className='headingOfSongsTable' id='topRowSongsTable'>
                <div className='headingOfSongsTableHash'>#</div>
                <div className='headingOfSongsTableTitle'>Title</div>
                <div className='headingOfSongsTableArtist'>Artist</div>
                {/* <div className='headingOfSongsTableDuration'>Duration</div> */}
            </div>
            { spotifyPlaylistSongs.map(function(data) {
                count++
                return <div className='headingOfSongsTable songsOfSongsTable' key={data}>
                            <div className='headingOfSongsTableHash'>{count}</div>
                            <div className='headingOfSongsTableTitle'onClick={()=>setPlayingSong(data)}>
                                <img src={data.imageUrl} className='songsTableTitleImage'></img>
                                <h4 style={{'margin':'0px'}}>{data.songName}</h4>
                            </div>
                            <div className='headingOfSongsTableArtist'>{data.artist.map(function(data2){
                                return <NavLink to={`../../artistSongs/${data2.artistId}`}>{data2.artistName} </NavLink>
                            })}</div>
                            {/* <div className='headingOfSongsTableDuration'>3:00</div> */}
                        </div>
            })}
        </div>
    </div>
  )
}
