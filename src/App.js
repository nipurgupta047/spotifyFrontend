
import './App.css';
import HomePage from './components/HomePage/HomePage';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { useState } from 'react';

function App() {
  const [playingSong, setPlayingSong] = useState({
    _id: "4f5f9367-330f-43c1-b3e9-7e4039919302",
    songName: "Woman",
    artist: [
      {
        artistId: "dbb0e362-357b-42d7-ae56-14e0c48305cc",
        artistName: "Doja Cat",
        $oid: "650f3ff11249aa267f5c10e2"
      }
    ],
    imageUrl: "https://res.cloudinary.com/dh4oazlni/image/upload/v1695496069/spotifyCloneImages/woman_lpqp1i.jpg",
    songUrl: "https://res.cloudinary.com/dh4oazlni/video/upload/v1695494021/spotifyCloneSongs/Woman---Doja-Cat_PagalWorlld.Com_myqytu.mp3",
    noOfLikes: 0,
    __v: 0
  })

  return (
      <div className="App">
        <HomePage playingSong={playingSong} setPlayingSong={setPlayingSong}/>
        <MusicPlayer playingSong={playingSong} setPlayingSong={setPlayingSong}/>
      </div>
  );
}

export default App;
