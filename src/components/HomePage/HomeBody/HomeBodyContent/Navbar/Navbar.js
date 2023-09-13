import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './styles.css'

// const ups = document.getElementById('homeBodyContent')
// ups.addEventListener('scroll', () => {
//   const verticalScrollPx = ups.scrollY || ups.pageYOffset;
//   console.log('yyyy', verticalScrollPx);
//   if (verticalScrollPx > 65) {
//     console.log('xxxx');
//     document.getElementById('navbar').style.backgroundColor = 'red';
//   } 
// });


export default function Navbar() {

  useEffect(()=>{
      const ups = document.getElementById('homeBodyContent')
      document.getElementById('navbar').style.backgroundColor = 'rgba(18,18,18,0)';
      ups.addEventListener('scroll', () => {
      const verticalScrollPx = ups.scrollTop;
      console.log('yyyy', verticalScrollPx);
      if (verticalScrollPx > 200) {
        console.log('xxxx');
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
            <button className='signup loginSignup'>Sign Up</button>
            <button className='login loginSignup'>Log in</button>
        </div>
    </div>
  )
}