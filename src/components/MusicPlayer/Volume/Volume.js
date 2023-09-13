import React from 'react'
import './styles.css'

export default function Volume() {
    function fun(){
        const x = document.getElementById('audioControls')
        console.log(x.duration);
        x.play();
    }
    function fun1(){
        const x = document.getElementById('audioControls')
        console.log(x.currentTime);
        x.pause(); 
    }
  return (
    <div id='volume'>
      <audio src='/music/1.mp3' type="audio/mpeg" id='audioControls'>pp</audio>
      <button onClick={fun}>Play</button>
      <button onClick={fun1}>Pause</button>
    </div>
  )
}
