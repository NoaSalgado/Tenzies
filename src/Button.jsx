function Button({ rollDice, restartGame, isTenzies }) {
  const buttonText = isTenzies ? 'New Game' : 'Roll';
  const action = isTenzies ? restartGame : rollDice;

  return (
    <button className='roll-btn' onClick={action}>
      {buttonText}
    </button>
  );
}

export default Button;
