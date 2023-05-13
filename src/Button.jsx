function Button({ rollDice }) {
  return (
    <button className='roll-btn' onClick={rollDice}>
      Roll
    </button>
  );
}

export default Button;
