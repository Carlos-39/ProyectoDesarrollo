import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Prueba />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Prueba />
      <Prueba />
      <Prueba />
      <Prueba />
    </div>
  );
}

function Prueba(){
  return (
    <div>
      <h1>Prueba</h1>
    </div>
  );
}

export default App;
