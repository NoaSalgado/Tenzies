import Dice from './Dice';
function Board({ allDice, handleDiceClick, gameStarted }) {
  const className = `board ${gameStarted ? '' : 'disabled'}`;
  return (
    <div className={className}>
      {allDice.map(({ id, value, isFreezed }) => (
        <Dice
          key={id}
          value={value}
          isFreezed={isFreezed}
          handleDiceClick={() => handleDiceClick(id)}
        />
      ))}
    </div>
  );
}

export default Board;
