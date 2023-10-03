import React from 'react'
import { FaHome, FaSistrix } from 'react-icons/fa'
import './styles.css'

export default function HomeAndSearch() {
  return (
    <div id='homeAndSearch'>
      
      <div className='iconAndLabel iconAndLabelHome'>
        <div className='iconHome'>
            <FaHome />  
        </div>
        <div className='labelHome'>
            <a href='/'>Home</a>
        </div>
      </div>
      <div className='iconAndLabel iconAndLabelSearch'>
      <div className='iconSearch'>
            <FaSistrix />  
        </div>
        <div className='labelSearch'>
            Search
        </div>
      </div>

    </div>
  )
}
