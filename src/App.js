import logo from './logo.svg';
import './App.css';

function App() {
  const test = 15;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt React paskaita!
        </p>
        <a
          className="App-link"
          href="https://codeacademy.online/dashboard/modules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy
        </a>
      </header>
    </div>
  );
}

export default App;
