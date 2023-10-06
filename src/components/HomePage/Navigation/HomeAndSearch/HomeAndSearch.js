import React from 'react'
import { FaHome, FaSistrix } from 'react-icons/fa'
import './styles.css'
import { NavLink } from 'react-router-dom'

export default function HomeAndSearch() {
  return (
    <div id='homeAndSearch'>
      
      <div className='iconAndLabel iconAndLabelHome'>
        <div className='iconHome'>
            <FaHome />  
        </div>
        <div className='labelHome'>
            <a href='/'>
              <NavLink to='/'>
                Home
              </NavLink>
            </a>
        </div>
      </div>
      <div className='iconAndLabel iconAndLabelSearch'>
      <div className='iconSearch'>
            <FaSistrix />  
        </div>
        <div className='labelSearch'>
        {/* <a href='/search' className='linkSearch'> */}
          <NavLink to='/search'>
            Search
          </NavLink>
        {/* </a> */}
        </div>
      </div>

    </div>
  )
}
