import React, { useState } from "react";
import "./Answers.css";
import Main from "./Main";

function Answers() {
  const [userInput, setUserInput] = useState("");
  const [randomIndex, setRandomIndex] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    if (userInput) {
      setError("");
      setRandomIndex(Math.round(Math.random() * 20));
      setUserInput("");
    } else {
      setError("Enter a question to know the answer!");
    }
    console.log(randomIndex);
  };

  const possibleAnswers = [
    "I cannot answer that question.",
    "Dare to dream!",
    "It is certain.",
    "Don't count on it.",
    "It is decidedly so!",
    "A miracle is on its way!",
    "Follow your heart!",
    "Appreciate present blessing.",
    "Listen to your intuition!",
    "Outlook not so good.",
    "Signs point to yes.",
    "Only time will tell.",
    "It's time to let go.",
    "It is time to act.",
    "You are divinely guided. Don't give up!",
    "Keep your guard up!",
    "All is an illusion.",
    "Give yourself some time to heal.",
    "The answer is no.",
    "It is never too late.",
  ];

  const answer = possibleAnswers[randomIndex];
  return (
    <div className="Answers">
      <input
        type="text"
        className="question"
        value={userInput}
        onChange={handleChange}
      />
      <div className="crystal-ball">
        <Main />
        <div className="content" onClick={handleClick}>
          {error ? (
            <p className="error">{error}</p>
          ) : answer ? (
            <p className="answer">{answer}</p>
          ) : (
            <button type="submit">Click the Magic Crystal Ball</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Answers;
