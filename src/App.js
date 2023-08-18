import logo from './logo.svg';
import './App.css';

function App() {

  const rsaPublicKey = "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIJ4EX/2tsyp61pGoWncxCkEkkoTUXek+Nb5DVVp5o9sOgcKbLHkxdn/GfY3e8uUqJ7B6q4Z4Om9ML3LDPczMRECAwEAAQ==-----END PUBLIC KEY-----";
  const googleApiUrl = "https://maps.google.com/maps/api/js?key=";
  const googleApiKey = "AIzaSyBTp0SoH99Vc8u-jpoMfatw0mHck0NtgTs";
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
