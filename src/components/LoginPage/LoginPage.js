import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import usernameContext from '../../context'


export default function LoginPage() {

    const [userUsername, setUserUsername] = useContext(usernameContext)

    const navigate = useNavigate();

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

        const loginUrl = 'http://localhost:8000/login';
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
            <p className='spotifyTitle'>Spotify</p>
        </div>
        <div id='loginContainer'>
            <div id='innerLoginContainer'>
                <p id='loginToSpotify'>Log in to Spotify</p>
                <hr/>
                <p className='label'>Email or username</p>
                <input type='text' id='loginEmail' />
                <p className='label'>Password</p>
                <input type='password' id='loginPassword' />
                <button id='loginButton' onClick={submitLogin}>Log In</button>
                <p id='dontHaveAccount'>Don't have an account? <span id='signupForSpotify'>Sign up for Spotify</span></p>
            </div>
        </div>
    </div>
  )
}
