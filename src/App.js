import "./App.css";
import Answers from "./Answers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let the Universe Guide You</h1>

        <h3>Type to ask the Magic Crystal Ball a question!</h3>
        <Answers />
      </header>
      <footer className="App-footer">
        <span>
          Stock footage provided by{" "}
          <a
            class="link author-link-popup"
            target="_blank"
            rel="noreferrer"
            href="https://www.videvo.net/profile/videvo"
          >
            Videvo
          </a>
          , downloaded from{" "}
          <a
            class="videvo-redirect"
            target="_blank"
            rel="noreferrer"
            href="https://www.videvo.net"
          >
            videvo.net
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
