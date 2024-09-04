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

        <p1> Website Created by Daniel Steele - Full Stack Developer | Visit my site! | Connect on LinkedIn! </p1>
      </div>

    </div>
  );
}

export default App;
