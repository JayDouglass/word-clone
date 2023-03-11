import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    console.info({ answer });
    return answer;
  });
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(value) {
    setGuesses([...guesses, { key: Date.now(), value }]);
  }

  function restart() {
    const answer = sample(WORDS);
    console.info({ answer });
    setAnswer(answer);
    setGuesses([]);
  }

  const didWin = guesses.some((guess) => guess.value === answer);
  const didLose = guesses.length === NUM_OF_GUESSES_ALLOWED && !didWin;
  const gameOver = didWin || didLose;

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameOver} />

      <Keyboard answer={answer} guesses={guesses} />

      {didWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
            <RestartButton onClick={restart} />
          </p>
        </div>
      )}

      {didLose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
            <RestartButton onClick={restart} />
          </p>
        </div>
      )}
    </>
  );
}

function RestartButton({ onClick }) {
  return (
    <button onClick={onClick} type="button">
      Restart
    </button>
  );
}

export default Game;
