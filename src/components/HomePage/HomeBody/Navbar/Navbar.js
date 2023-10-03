import React, { useEffect, useContext} from 'react'
import { FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa'
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

  return (
    <div id = 'navbar'>
        <div className='arrowButtonsDiv'>
            <button className='backwardArrow arrowButtons'><FaChevronLeft/></button>
            <button className='forwardArrow arrowButtons'><FaChevronRight/></button>
        </div>

        <div className='loginSignupDiv'>
          { 
            userUsername===''?<>
                                <button className='signup loginSignup'>Sign Up</button>
                                <button className='login loginSignup'>Log in</button>
                              </>:
                              <>
                                <button id='profileButton'><FaUser/></button>
                              </>
          } 
        </div>
    </div>
  )
}
