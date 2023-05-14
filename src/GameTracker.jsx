function GameTracker({ time, rolls }) {
  const seconds = Math.floor((time % 6000) / 100);
  const miliseconds = time % 100;
  return (
    <div className='game-tracker'>
      <p className='timer'>
        <i className='fa-solid fa-stopwatch'></i> <span>Time:</span>
        {seconds.toString().padStart(2, '0')}:
        {miliseconds.toString().padStart(2, '0')}s
      </p>
      <p className='rolls'>
        <i className='fa-solid fa-dice'></i> <span>Rolls:</span> {rolls}
      </p>
    </div>
  );
}

export default GameTracker;
