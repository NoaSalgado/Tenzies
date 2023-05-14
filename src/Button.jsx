function Button({ startGame, rollDice, restartGame, isTenzies, gameStarted }) {
  const buttonText = isTenzies
    ? 'New Game'
    : !gameStarted
    ? 'Start Game'
    : 'Roll';
  const action = isTenzies ? restartGame : !gameStarted ? startGame : rollDice;

  return (
    <button className='roll-btn' onClick={action}>
      {buttonText}
    </button>
  );
}

export default Button;
