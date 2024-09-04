import './App.css';
import Canvas from './canvas.js';
import Menu from './menu.js';

function App() {

  return (
    <div className="App">

      <div className="navigation"></div>

      <div className="content-container">

        <Menu />

        <div className="canvas-container">
          <div className="canvas">

            <Canvas />

          </div>
        </div>
      </div>


      <div className="footer">

        <div className="footer-1">
          <span>  Website Created by Daniel Steele - Full Stack Developer ©2024 </span>
        </div>

        <div className="footer-2">
          <span> Click <a href="https://danielsteele.dev">here</a> to visit my site!
          </span>
        </div>

        <div className="footer-3">
          <span>Connect with me!</span>
          <a href="https://github.com/DanielSteele1">
            <img className="socials" src="github-logo.png" alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/daniel-steele-b06443198/">
            <img className="socials" src="linkedin.png"></img>
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;
