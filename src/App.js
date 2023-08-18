import logo from './logo.svg';
import './App.css';

function App() {

  
function isFooBar(param) {
    if (param.foo && param.foo === "bar") {
        return true;
    }
    return false;
}

let someObject = {
    foo: "bar"
}

if (isFooBar(someObject)) {
    someObject.foo = "done"
}

console.log(someObject.foo);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
