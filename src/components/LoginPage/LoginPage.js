import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import usernameContext from '../../context'
import { FaSpotify } from 'react-icons/fa'


export default function LoginPage() {

    const [userUsername, setUserUsername] = useContext(usernameContext)
    const navigate = useNavigate();

    async function isLoggedIn() {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/isLoggedIn`, {'token':localStorage.getItem('token')})
        if(res.data !== ''){
            window.open('/','_self')
        }
    }

    useEffect(()=>{
        isLoggedIn()
    },[])

    async function submitLogin(){
        const username = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if(!username || !password){
            alert('Fields cannot be empty')
            return;
        }

        const user = {
            'username': username,
            'password': password
        }

        const loginUrl = `${process.env.REACT_APP_BACKEND_URL}/login`;
        const res = await axios.post(loginUrl, user)

        if(res.data.status === 'logged'){
            const token  = res.data.data
            localStorage.setItem('token', token)
            setUserUsername(user.username)
            alert('Successfully Logged In')
            navigate('/', { replace: true });
        }
        else{
            alert(res.data)
        }

    }


  return (
    <div id='loginPage'>
        <div className='spotifyTitleDiv'>
        <FaSpotify style={{'fontSize':'48px'}}/><p className='spotifyTitle'>Spotify</p>
        </div>
        <div id='loginContainer'>
            <div id='innerLoginContainer'>
                <p id='loginToSpotify'>Log in to Spotify</p>
                <hr/>
                <p className='label'>Username</p>
                <input type='text' id='loginEmail' />
                <p className='label'>Password</p>
                <input type='password' id='loginPassword' />
                <button id='loginButton' onClick={submitLogin}>Log In</button>
                <p id='dontHaveAccount'>Don't have an account? <span id='signupForSpotify' onClick={()=>window.open('/signup','_self')}>Sign up for Spotify</span></p>
            </div>
        </div>
    </div>
  )
}
