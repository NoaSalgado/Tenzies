import GameTracker from './GameTracker';
function GameResult({ time, rolls, bestTime, bestGameRolls }) {
  return (
    <div>
      <h2 className='game-result'>You did it!!!</h2>
      <h3 className='current-game'>Your game:</h3>
      <GameTracker time={time} rolls={rolls} />
      <h3 className='best-game'>Best game:</h3>
      <GameTracker time={bestTime} rolls={bestGameRolls} />
    </div>
  );
}

export default GameResult;
