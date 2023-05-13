import Dice from './Dice';
function Board({ allDice, handleDiceClick }) {
  return (
    <div className='board'>
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
