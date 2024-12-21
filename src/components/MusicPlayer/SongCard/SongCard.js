import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import './styles.css'
import usernameContext from '../../../context'
import axios from 'axios'

export default function SongCard({playingSong, setPlayingSong}) {

  const [like, setLike] = useState(false)
  const [userUsername, setUserUsername] = useContext(usernameContext)


  const [artistString, setArtistString] = useState('')
  useEffect(()=>{
    setLike(false)
    async function fetchLikedSongs(){
      try {
        let fetchedSongs = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getLikedSongs`,{'username':userUsername})
        fetchedSongs = fetchedSongs.data
        for(let i=0; i<fetchedSongs.length; i++){
          
          if(fetchedSongs[i].songId === playingSong._id){
            setLike(true)
            return
          }
        }
      } catch (error) {
        setLike(false)
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

  if(userUsername === ''){
    alert('You need to login to add to library')
    return
  }
    
    if(!like){
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/likeSong`,{
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
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/removeLikeSong`,{
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
