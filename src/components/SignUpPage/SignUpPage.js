import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import usernameContext from '../../context'

export default function SignUpPage() {

    const [userUsername, setUserUsername] = useContext(usernameContext)

    const navigate = useNavigate()

    async function isLoggedIn() {
        const res = await axios.post('https://spotifybackend-jij3.onrender.com/isLoggedIn', {'token':localStorage.getItem('token')})
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

        const addUserUrl = 'https://spotifybackend-jij3.onrender.com/signup'
        const res = await axios.post(addUserUrl, userBody);
        alert(res.data);
        if(res.data === 'You are registered')
        navigate('/login', { replace: true });
        
        return;
    
        }


  return (
    <div id='signupPage'>
    <div className='spotifyTitleDiv'>
        <p className='spotifyTitle'>Spotify</p>
    </div>
    <div id='signupContainer'>
        <div id='innerSignupContainer'>
            <p id='signupToSpotify'>Sign up for free to Spotify</p>
            <hr/>
            <p className='label'>Email</p>
            <input type='text' id='signupEmail' placeholder='email'/>
            <p className='label'>Profile Name</p>
            <input type='text' id='signupProfileName' placeholder='profile name'/>
            <p className='label'>Password</p>
            <input type='password' id='signupPassword' placeholder='password'/>
            <button id='signupButton' onClick={submitRegister}>Sign Up</button>
            <p id='haveAccount'>Have an account? <span id='loginForSpotify'>Log in</span></p>
        </div>
    </div>
</div>
  )
}
