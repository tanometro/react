import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/img/header.png" alt="org"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende reactjs
        </a>
      </header>
    </div>
  );
}

export default App;
