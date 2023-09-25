import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import './styles.css'

export default function SongCard({playingSong, setPlayingSong}) {

  const [like, setLike] = useState(false)


  // console.log(playingSong);
  const [artistString, setArtistString] = useState('')
  useEffect(()=>{
    setArtistString('')
    for(let i =0; i<playingSong.artist.length; i++){
      setArtistString(prev => prev+playingSong.artist[i].artistName)
      if(i<playingSong.artist.length-1)
      setArtistString(prev => prev+', ')
    }
  },[playingSong]);

  function addRemoveFromLibrary(){
    setLike(prev=>!prev)
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
