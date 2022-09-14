import "./App.css";
import Answers from "./Answers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let the Universe guide you.</h1>

        <h4>Type to ask the magic crystal ball a question!</h4>
        <Answers />
      </header>
    </div>
  );
}

export default App;
