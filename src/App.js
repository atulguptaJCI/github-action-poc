import logo from './logo.svg';
import './App.css';

function App() {
  const result = 12365258233823392233622368566 * 99999999999999999999999999;
  return (
    <div className="App">
      <header className="App-header">
    {{result}}
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
    </div>
  );
}

export default App;
