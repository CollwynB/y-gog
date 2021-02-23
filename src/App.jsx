import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background">
        <center>
          <h1>Y GOG</h1>
          <div className="form">
            <form action="mailto:collwynbevan@gmail.com" method="post" encType="text/plain">
              <label htmlFor="email">
                <p>Email/E-bost</p>
                <input className="input" name="email" placeholder="..."></input>
              </label>
          
              <label htmlFor="submission">
              <p>Submission text/Testun cyflwyno</p> 
                <textarea className="input text-area" name="submission" placeholder="..."></textarea>
              </label>
              <button className="submit">Submit</button>
            </form>
          </div>
        </center>
      
      </div>
    </div>
  );
}

export default App;
