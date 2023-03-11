import React from "react";

function GuessInput({addGuess, disabled}) {
  const [guess, setGuess] = React.useState("");

  function onSubmit(e) {
    e.preventDefault();

    const upperCased = guess.toUpperCase();
    console.log(upperCased);
    addGuess(upperCased);
    setGuess("");
  }

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength="5"
        minLength="5"
        disabled={disabled}
        onChange={(e) => setGuess(e.target.value)}
      />
    </form>
  );
}

export default GuessInput;
