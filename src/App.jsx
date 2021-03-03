import './App.css';
import { useState } from "react"
import logo from "./assets/yGOG.png" 
import English from "./content/english.jsx"
import Welsh from "./content/welsh.jsx"
function App() {
  const [english, setEnglish] = useState(true);
  
  
  return (
    <div className="App">
        <div className="overlay"></div>
      <div className="background"></div>
      <div>
        <div onClick={() => setEnglish(!english)} className="lang-select">
          {english ? "Cymraeg" : "English"}
        </div>
        <center>
          <div className="header">
            <img className="logo" src={logo} alt="Y Gog"/>
            <p className="subtitle">{english ? "A surreal exploration of the unseen north" : "Ymchwilad swreal o’r gogledd anweledig"}</p>
          </div>
          <div className="main-body">
            { english ? (<English></English>) : (<Welsh></Welsh>) }
          </div>
        </center>

      </div>
    </div>
  );
}

export default App;
