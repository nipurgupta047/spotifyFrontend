import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import './styles.css'
import usernameContext from '../../../context'
import axios from 'axios'

export default function SongCard({playingSong, setPlayingSong}) {

  const [like, setLike] = useState(false)
  const [userUsername, setUserUsername] = useContext(usernameContext)


  // console.log(playingSong);
  const [artistString, setArtistString] = useState('')
  useEffect(()=>{
    console.log(playingSong._id);
    setLike(false)
    async function fetchLikedSongs(){
      try {
        let fetchedSongs = await axios.post('http://localhost:8000/getLikedSongs',{'username':userUsername})
        fetchedSongs = fetchedSongs.data
        console.log(fetchedSongs);
        for(let i=0; i<fetchedSongs.length; i++){
          console.log(playingSong._id, '::', fetchedSongs[i].songId);
          if(fetchedSongs[i].songId === playingSong._id){
            setLike(true)
            return
          }
        }
      } catch (error) {
        setLike(false)
        console.log(error);
      }
    }
    fetchLikedSongs()
    setArtistString('')
    for(let i =0; i<playingSong.artist.length; i++){
      setArtistString(prev => prev+playingSong.artist[i].artistName)
      if(i<playingSong.artist.length-1)
      setArtistString(prev => prev+', ')
    }
  },[playingSong, userUsername, artistString]);


 async function addRemoveFromLibrary(){
    
    if(!like){
      try {
        const res = await axios.post('http://localhost:8000/likeSong',{
          'username':userUsername,
          'songId':playingSong._id,
          'songName': playingSong.songName,
          'songImageUrl':playingSong.imageUrl
        })
        setLike(prev=>!prev)
        alert(res.data)
      } catch (error) {
        alert('could not add to library')
      }
    }
    else{
      try {
        const res = await axios.post('http://localhost:8000/removeLikeSong',{
          'username':userUsername,
          'songId':playingSong._id
        })
        setLike(prev=>!prev)
        alert(res.data)
      } catch (error) {
        alert('could not remove from library')
      }
    }
  }
  

  return (
    <div className='songCard'>
        <img src = {playingSong.imageUrl} id='songCardImage'/>
        <div className='songCardLabel'>
            <span className='songCardSongName'>{playingSong.songName}</span>
            <br />  
            <span className='songCard ArtistName'>{artistString}</span>
        </div>
        <div className='iconLike' onClick={addRemoveFromLibrary}>
        { like===false?<FaRegHeart />:<FaHeart /> }
        </div>
    </div>
  )
}
