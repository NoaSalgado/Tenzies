function Dice({ value, handleDiceClick, isFreezed }) {
  const className = `dice ${isFreezed ? 'freezed' : ''}`;
  return (
    <div className={className} onClick={handleDiceClick}>
      {value}
    </div>
  );
}

export default Dice;
