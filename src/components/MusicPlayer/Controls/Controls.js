import React, { useState } from 'react'
import './styles.css'
import { FaPlayCircle, FaPauseCircle, FaStepBackward, FaStepForward } from 'react-icons/fa';

let currentTimeInterval

export default function Controls() {
    
    const [play, setPlay] = useState(false)

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    function getCurrentTime(){
        const time = document.getElementById('currentMusic').currentTime
        const dur = document.getElementById('currentMusic').duration
        let x=''
        if(Math.floor(time-Math.floor(time/60)*60)<10)
            x='0'
        setCurrentTime(Math.floor(time/60) + ':' + x + Math.floor(time-Math.floor(time/60)*60))
        setDuration(Math.floor(dur/60) + ':' + Math.floor(dur-Math.floor(dur/60)*60));
        if(time === dur){
            setPlay(false)
            clearInterval(currentTimeInterval)
        }
        const songProgress = time*100/dur;
        console.log(songProgress)
        document.getElementById('progressBarTime').value = songProgress
    }

    function progressChanged(){

        const songProgress = document.getElementById('progressBarTime').value;
        console.log('songProgress   ', songProgress)
        const dur = document.getElementById('currentMusic').duration
        const time = dur*songProgress/100
        let x=''
        if(Math.floor(time-Math.floor(time/60)*60)<10)
            x='0'
        setCurrentTime(Math.floor(time/60) + ':' + x + Math.floor(time-Math.floor(time/60)*60))
        setDuration(Math.floor(dur/60) + ':' + Math.floor(dur-Math.floor(dur/60)*60));
        document.getElementById('currentMusic').currentTime = time
    }

    function playPause(){
        if(play){
            clearInterval(currentTimeInterval)
            setPlay(false)
            const musicPlaying = document.getElementById('currentMusic')
            musicPlaying.pause()
        }
        else{
            currentTimeInterval = setInterval(getCurrentTime,100)
            setPlay(true)
            const musicPlaying = document.getElementById('currentMusic')
            musicPlaying.play()
        }
    }
    
  return (
    <div id='controls'>
      <div id='controlPanel'>
        <audio controls src='/music/1.mp3' type="audio/mpeg" id='currentMusic'>pp</audio>
        <div className='backwardForward'>
           <FaStepBackward/>
        </div>
        <div id='playPauseButton' onClick={playPause}>
            {!play? <FaPlayCircle/>:<FaPauseCircle/>}
        </div>
        <div className='backwardForward'>
            <FaStepForward/>
        </div>
      </div>
      <div id='progressBar'>
        <span className='time currentTime'>{currentTime}</span>
        <input type='range' id='progressBarTime' onChange={progressChanged}/>
        <span className='time durationTime'>{duration}</span>
      </div>
    </div>
  )
}
