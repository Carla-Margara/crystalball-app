import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ask a question!</h1>
        <h4>Make sure it is a "yes" or "no" question. </h4>
      </header>
    </div>
  );
}

export default App;
