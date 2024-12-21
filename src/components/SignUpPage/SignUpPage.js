import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import usernameContext from '../../context'
import { FaSpotify } from 'react-icons/fa'

export default function SignUpPage() {

    const [userUsername, setUserUsername] = useContext(usernameContext)

    const navigate = useNavigate()

    async function isLoggedIn() {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/isLoggedIn`, {'token':localStorage.getItem('token')})
        if(res.data !== ''){
            window.open('/','_self')
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

  async function submitRegister(){

        const profileName = document.getElementById('signupProfileName').value
        const username = document.getElementById('signupEmail').value
        const password = document.getElementById('signupPassword').value

        if(!username || !profileName || !password){
            alert(`Fields shouldn't be empty`)
            return
        }

        const userBody = {
            'profileName' : profileName,
            'username' : username,
            'password' : password
        }

        const addUserUrl = `${process.env.REACT_APP_BACKEND_URL}/signup`
        const res = await axios.post(addUserUrl, userBody);
        alert(res.data);
        if(res.data === 'You are registered')
        navigate('/login', { replace: true });
        
        return;
    
        }


  return (
    <div id='signupPage'>
    <div className='spotifyTitleDiv'>
     <FaSpotify style={{'fontSize':'48px'}}/><p className='spotifyTitle'>Spotify</p>
    </div>
    <div id='signupContainer'>
        <div id='innerSignupContainer'>
            <p id='signupToSpotify'>Sign up for free to Spotify</p>
            <hr/>
            <p className='label'>Username</p>
            <input type='text' id='signupEmail' placeholder='username'/>
            <p className='label'>Profile Name</p>
            <input type='text' id='signupProfileName' placeholder='profile name'/>
            <p className='label'>Password</p>
            <input type='password' id='signupPassword' placeholder='password'/>
            <button id='signupButton' onClick={submitRegister}>Sign Up</button>
            <p id='haveAccount'>Have an account? <span id='loginForSpotify' onClick={()=>window.open('/login','_self')}>Log in</span></p>
        </div>
    </div>
</div>
  )
}
