import React, { useEffect, useState } from 'react'
import './styles.css'
import { FaPlayCircle, FaPauseCircle, FaStepBackward, FaStepForward } from 'react-icons/fa';

let currentTimeInterval

export default function Controls({playingSong, setPlayingSong}) {
    
    const [play, setPlay] = useState(false)
    const [dur, setDur] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(()=>{

        clearInterval(currentTimeInterval)
        setCurrentTime(0)
        const musicPlaying = document.getElementById('currentMusic')
        musicPlaying.onloadeddata = function(){
            setDur(musicPlaying.duration)
        }
        let y = ''
        if(Math.floor(dur-Math.floor(dur/60)*60)<10)
            y='0'
        setDuration(Math.floor(dur/60) + ':' + y + Math.floor(dur-Math.floor(dur/60)*60));
        document.getElementById('progressBarTime').value = 0
        
        setPlay(false)

    },[playingSong]);

    function getCurrentTime(){
        const time = document.getElementById('currentMusic').currentTime
        setDur(document.getElementById('currentMusic').duration)
        let x=''
        if(Math.floor(time-Math.floor(time/60)*60)<10)
            x='0'
        let y=''
        if(Math.floor(dur-Math.floor(dur/60)*60)<10)
            y='0'
        setCurrentTime(Math.floor(time/60) + ':' + x + Math.floor(time-Math.floor(time/60)*60))
        setDuration(Math.floor(dur/60) + ':' + y + Math.floor(dur-Math.floor(dur/60)*60));
        if(time === dur){
            setPlay(false)
            clearInterval(currentTimeInterval)
        }
        const songProgress = time*100/dur;
        document.getElementById('progressBarTime').value = songProgress
    }

    function progressChanged(){

        const songProgress = document.getElementById('progressBarTime').value;
        setDur(document.getElementById('currentMusic').duration)
        const time = dur*songProgress/100
        let x=''
        if(Math.floor(time-Math.floor(time/60)*60)<10)
            x='0'
        let y=''
        if(Math.floor(dur-Math.floor(dur/60)*60)<10)
            y='0'
        setCurrentTime(Math.floor(time/60) + ':' + x + Math.floor(time-Math.floor(time/60)*60))
        setDuration(Math.floor(dur/60) + ':' + y + Math.floor(dur-Math.floor(dur/60)*60));
        document.getElementById('currentMusic').currentTime = time
    }

    function playPause(){
        if(play){
            clearInterval(currentTimeInterval)
            const musicPlaying = document.getElementById('currentMusic')
            if(play===true && !musicPlaying.paused){
                setPlay(false)
                musicPlaying.pause()
            }
        }
        else{
            currentTimeInterval = setInterval(getCurrentTime,100)
            const musicPlaying = document.getElementById('currentMusic')
            if(play===false && musicPlaying.paused){
                setPlay(true)
                musicPlaying.play()
            }
        }
    }
    
  return (
    <div id='controls'>
      <div id='controlPanel'>
        <audio controls src={playingSong.songUrl} type="audio/mpeg" id='currentMusic' preload="metadata">pp</audio>
        {/* <div className='backwardForward'>
           <FaStepBackward/>
        </div> */}
        <div id='playPauseButton' onClick={playPause}>
            {!play? <FaPlayCircle/>:<FaPauseCircle/>}
        </div>
        {/* <div className='backwardForward'>
            <FaStepForward/>
        </div> */}
      </div>
      <div id='progressBar'>
        <span className='time currentTime'>{currentTime}</span>
        <input type='range' id='progressBarTime' onChange={progressChanged}/>
        <span className='time durationTime'>{duration}</span>
      </div>
    </div>
  )
}
