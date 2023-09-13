import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import './styles.css'

export default function SongCard() {

  return (
    <div className='songCard'>
        <img src = '/images/1.jpg' id='songCardImage'/>
        <div className='songCardLabel'>
            <span className='songCardSongName'>Paint The Town Red</span>
            <br />  
            <span className='songCard ArtistName'>Doja Cat</span>
        </div>
        <div className='iconLike'>
        <FaRegHeart />
        </div>
    </div>
  )
}
