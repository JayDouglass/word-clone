import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guesses({ guesses, answer }) {
  return (
    <>
      {true && (
        <div className="guess-results">
          {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => {
            const guess = guesses[guessIndex];
            const guessValue = guess?.value;
            const guessAsArray = guess ? [...guessValue] : [];
            const checkGuessResult = guess
              ? checkGuess(guess.value, answer)
              : null;

            return (
              <p className="guess" key={guessIndex}>
                {range(5).map((charIndex) => (
                  <span
                    className={
                      "cell " +
                      (checkGuessResult ? checkGuessResult[charIndex].status : "")
                    }
                    key={charIndex}
                  >
                    {guessAsArray?.[charIndex]}
                  </span>
                ))}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Guesses;
