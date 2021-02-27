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
            <img class="logo" src={logo} alt="Y Gog"/>
            <p className="subtitle">A surreal exploration of the unseen north.</p>
          </div>
          <div className="main-body">
            { english ? (<English></English>) : (<Welsh></Welsh>) }
          </div>
          
          {/* <div className="form">
            <form action="sendSubmission" method="post">
              <label htmlFor="email">
                <p>{english ? "Email" : "E-bost"}</p>
                <input className="input" name="email" placeholder="..."></input>
              </label>

              <label htmlFor="submission">
                <p>{english ? "Submission text" : "Testun cyflwyno"}</p>
                <textarea className="input text-area" name="submission" placeholder="..."></textarea>
              </label>
              <button className="submit">Submit</button>
            </form>
          </div> */}
        </center>

      </div>
    </div>
  );
}

export default App;
