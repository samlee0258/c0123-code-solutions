import logo from './logo.svg';
import './App.css';
import HotButton from './HotButton.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HotButton text="Hot Button" />
      </header>
    </div>
  );
}

export default App;
