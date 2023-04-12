import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      {Header()}
      {/* <Header></Header>*/}
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
