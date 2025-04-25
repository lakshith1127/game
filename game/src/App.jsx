import { useState } from "react";
import "./App.css";
function App() {
  const [target] = useState(Math.floor(Math.random() * 10));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkGuess = () => {
    if (parseFloat(guess) === target) {
      setMessage("congrats! you guessed the correct answer");
    } else {
      setMessage(guess > target ? "Too high!" : "Too low!");
    }
    setGuess("");
  };
  return (
    <div>
      <h1>Guess the number Game</h1>
      <p>Guess a number betweeen 1 and 10</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkGuess}> Check </button>
      <p>{message}</p>
    </div>
  );
}

export default App;
