import './App.css';
import { useState } from "react"
import logo from "./assets/yGOG.png" 
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
            <h2>Submission Guidelines</h2>
            <p>
              Y Gog is looking for works exploring North Wales through the lenses of the magical, mythical and surreal. To create a multisensory experience, we accept not only written pieces but also visual and auditory works of art.
            </p>
            <p>
              Our maximum word count for prose is 3000 and 40 lines for Poetry. For audio and video, we will need a transcript that fits within the word/line count. For more experimental sounds and videos, from wind to rain, let your creativity shine; the limit is 3 minutes.
            </p>
            <p>
              As we are writing about North Wales, our anthology will be bilingual, accepting both English and Welsh submissions! We also strongly encourage unpublished writers to give it a try; we’d love to help your voices be heard!
            </p>
            <p>
              We accept all genres, even creative nonfiction and sci-fi, as long as they fit into the theme, however you want to interpret it. Y Gog will not be accepting fanfiction or obscene content. Anything unnecessarily gory or erotic will be rejected.
              If you have any questions, feel free to ask us via email or social media.
            </p>
            <h2>
              Submission process
            </h2>
            <p>Submit your stories and works of art by emailing them to us at <a href="mailto:weareygog@gmail.com">weareygog@gmail.com</a></p>
            <p>
              Y Gog will be accepting multiple submissions, 3 pieces total per person across formats. Only accepting unpublished works, but simultaneous submissions are accepted.
            </p>
            <p>
              You shall receive a reply within a maximum of 60 days informing you if your piece will be included in the anthology or not.
            </p>
            <p>The submissions are open until the 31/03/21.</p>
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
