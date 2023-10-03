import React, { useContext, useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import usernameContext from '../../../../../context'
import { useParams } from 'react-router-dom'


export default function UserPlaylistSongs({playingSong,setPlayingSong, getSongsOf, setGetSongsOf}) {

  const [spotifyPlaylistSongs, setSpotifyPlaylistSongs] = useState([])
  const  [spotifyPlaylist, setSpotifyPlaylist] = useState({})
  const [userUsername, setUserUsername] = useContext(usernameContext)
  const { userPlaylistId } = useParams()


  useEffect(()=>{
    async function getPlaylistSongs(){
      console.log('userrr', userUsername);
      const playlist = await axios.post(`http://localhost:8000/userPlaylist/${userPlaylistId}`, {'token':localStorage.getItem('token')})
      console.log('ppp',playlist);
      setSpotifyPlaylist(playlist.data)
      let tempSongs = []
      for (let index = 0; index < playlist.data.playlistSongs.length; index++) {
        console.log(index);
        const element = await getSongById(playlist.data.playlistSongs[index].songId)
        tempSongs.push(element)
      }
      console.log('temp ',tempSongs);
      setSpotifyPlaylistSongs(tempSongs)
    }
    getPlaylistSongs()
  },[getSongsOf]);

  async function getSongById(_id){
    console.log('eee',_id);
    const song = await axios.get(`http://localhost:8000/song/${_id}`)
      console.log('qq',song.data.songName)
      return song.data
  }
  let count = 0

  return (<div className={getSongsOf}>
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
                console.log('datata',data);
                count++
                return <div className='headingOfSongsTable songsOfSongsTable' key={data} onClick={()=>setPlayingSong(data)}>
                            <div className='headingOfSongsTableHash'>{count}</div>
                            <div className='headingOfSongsTableTitle'>
                                <img src={data.imageUrl} className='songsTableTitleImage'></img>
                                <h4 style={{'margin':'0px'}}>{data.songName}</h4>
                            </div>
                            <div className='headingOfSongsTableArtist'>{data.artist.map(function(data2){
                                return <a href={`../artistSongs/${data2.artistId}`}>{data2.artistName}</a>
                            })}</div>
                            {/* <div className='headingOfSongsTableDuration'>3:00</div> */}
                        </div>
            })}
        </div>
    </div>
    
  
  </div>)
}
