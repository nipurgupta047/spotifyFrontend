import React, { useEffect, useContext} from 'react'
import { FaChevronLeft, FaChevronRight, FaSpotify, FaUser } from 'react-icons/fa'
import './styles.css'

import usernameContext from '../../../../context'


export default function Navbar() {

  const [userUsername, setUserUsername] = useContext(usernameContext);

  useEffect(()=>{
      const ups = document.getElementById('homeBodyContent')
      document.getElementById('navbar').style.backgroundColor = 'rgba(18,18,18,0)';
      ups.addEventListener('scroll', () => {
      const verticalScrollPx = ups.scrollTop;
      if (verticalScrollPx > 200) {
        document.getElementById('navbar').style.backgroundColor = 'rgba(18,18,18,1)';
      }
      else{
        document.getElementById('navbar').style.backgroundColor = `rgba(18,18,18,${verticalScrollPx*0.005})`
        // document.getElementById('navbar').style.backgroundColor = `rgba(18,18,18,${verticalScrollPx*0.005})`;
      } 
    });
  },[])

  function logoutFromApp() {
    window.localStorage.setItem('token','')
    window.open('/login','_self')
  }

  return (
    <div id = 'navbar'>
        <div className='arrowButtonsDiv'>
          
        <button className='spotifyLogoDiv'><FaSpotify className='spotifyLogo'/></button>
            {/* <button className='backwardArrow arrowButtons'><FaChevronLeft/></button>
            <button className='forwardArrow arrowButtons'><FaChevronRight/></button> */}
        </div>

        <div className='loginSignupDiv'>
          { 
            userUsername===''?<>
                                <button className='signup loginSignup' onClick={()=>window.open('/signup','_self')}>Sign Up</button>
                                <button className='login loginSignup' onClick={()=>window.open('/login','_self')}>Log in</button>
                              </>:
                              <div id='profileDiv'>
                                {/* <button id='logoutButton'>Log Out</button> */}
                                <button id='profileButton'><FaUser/></button>
                                <p id='profileName'>{userUsername}</p>
                                <button id='logoutButton' onClick={logoutFromApp}>Log Out</button>
                              </div>
          } 
        </div>
    </div>
  )
}
