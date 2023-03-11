import React from "react";
import { checkGuess } from "../../game-helpers";

const rows = [[..."QWERTYUIOP"], [..."ASDFGHJKL"], [..."ZXCVBNM"]];

function Keyboard({ answer, guesses }) {
  const checkGuessResults = guesses.map(guess => checkGuess(guess.value, answer));
  const flattenedResults = checkGuessResults.flatMap(result => result);
  // console.log(flattenedResults);

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((letter) => {
            return (
              <span
                className={letterStatus(letter, flattenedResults)}
                key={letter}
              >
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function letterStatus(letter, flattenedResults) {
  const resultsForLetter = flattenedResults.filter(
    (result) => result.letter === letter
  );

  if (resultsForLetter.length === 0) {
    return "unused";
  }

  if (resultsForLetter.some((result) => result.status === "correct")) {
    return "correct";
  }

  if (resultsForLetter.some((result) => result.status === "misplaced")) {
    return "misplaced";
  }

  if (resultsForLetter.some((result) => result.status === "incorrect")) {
    return "incorrect";
  }
}

export default Keyboard;
