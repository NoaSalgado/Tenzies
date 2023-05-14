function Dice({ value, handleDiceClick, isFreezed }) {
  const className = `dice ${isFreezed ? 'freezed' : ''}`;
  const diceFace = (value) => {
    if (value === 1) {
      return (
        <div className='dice-face first-face'>
          <span className='dot'></span>
        </div>
      );
    } else if (value === 2) {
      return (
        <div className='dice-face second-face'>
          <span className='dot'></span>
          <span className='dot'></span>
        </div>
      );
    } else if (value === 3) {
      return (
        <div className='dice-face third-face'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </div>
      );
    } else if (value === 4) {
      return (
        <div className='dice-face fourth-face'>
          <div className='column'>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <div className='column'>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>
      );
    } else if (value === 5) {
      return (
        <div className='dice-face fifth-face'>
          <div className='column'>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <div className='column'>
            <span className='dot'></span>
          </div>
          <div className='column'>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>
      );
    } else if (value === 6) {
      return (
        <div className='dice-face sixth-face'>
          <div className='column'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
          <div className='column'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={className} onClick={handleDiceClick}>
      {diceFace(value)}
    </div>
  );
}

export default Dice;
