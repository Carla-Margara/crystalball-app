import logo from "./logo.svg";
import "./App.css";
import Ask from "./Ask";
import Answer from "./Answer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ask a question!</h1>
        <Ask />
        <h4>Let the Universe guide you. </h4>
        <Answer />
      </header>
    </div>
  );
}

export default App;
