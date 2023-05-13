import Dice from './Dice';
function Board({ allDice }) {
  return (
    <div className='board'>
      {allDice.map(({ id, value }) => (
        <Dice key={id} value={value} />
      ))}
    </div>
  );
}

export default Board;
