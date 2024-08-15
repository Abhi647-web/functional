import logo from './logo.svg';
import './App.css';
import Heros from './components/Heros';
import poster from './images/tolly.webp';
import video from './video/ab'

function App() {
  return (
    <div className="App">
      <h1>Popular Tollywood Heros </h1>
      <Heros  pic="./images/akhil.webp"  name="Akhil" age="28" role="Hero"  ></Heros>
      <Heros  pic="./images/allu.jpg"  name="Allu Arjun" age="42" role="Hero"  ></Heros>
      <Heros  pic="./images/chaitu.jpg"  name="Nag Chaitanya" age="38" role="Hero"  ></Heros>
      <Heros  pic="./images/nag.webp"  name="Nagarjuna" age="68" role="Hero"  ></Heros>
      <Heros  pic="./images/ntr.webp"  name="NTR" age="43" role="Hero"  ></Heros>
      <Heros  pic="./images/prabhas.jpg"  name="Prabhas" age="48" role="Hero"  ></Heros>
      <h1>Other Concepts</h1>
      <img src={poster} ></img>
      <img src="https://static.toiimg.com/thumb/msid-92977212,width-400,resizemode-4/92977212.jpg" ></img>
      <hr></hr>
      <img src="./images/poster.jpg" ></img>
      <div><audio src='./audios/song.mp3'controls  ></audio></div>
      <video src={video} controls  autoPlay muted  ></video>
      <video src='./video/sample.mp4' controls autoPlay></video>
      <hr></hr>
      <video src='https://youtu.be/JJrKrWNFcGM?si=FVAY9v3wugWrl3Dc' controls  ></video>
      <iframe width="360" height="215" src="https://www.youtube.com/embed/JJrKrWNFcGM?si=UuBAT912-RwQvfb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen   controls autoPlay></iframe>
      <audio src='https://services.brninfotech.com/tws/media2/songs/JERSEY/06 - Aarambhame Le.mp3'controls  ></audio>
      <video src='https://services.brninfotech.com/tws/media2/trailers/Mallesham.mp4'controls autoPlay muted ></video>
    </div>
  );
}

export default App;
