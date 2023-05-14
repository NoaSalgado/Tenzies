import { useEffect, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from './localStorage';
import Header from './Header';
import GameTracker from './GameTracker';
import Board from './Board';
import Button from './Button';

import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti';
import GameResult from './GameResult';

function TenziesGame() {
  const [allDice, setAllDice] = useState(generateAllInitialDice());
  const [isTenzies, setIsTenzies] = useState(false);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [bestTime, setBestTime] = useState(getFromLocalStorage('time') || null);
  const [bestGameRolls, setBestGameRolls] = useState(
    getFromLocalStorage('rolls') || null
  );

  useEffect(() => {
    const allDiceAreFreezed = allDice.every((dice) => dice.isFreezed);
    const allDiceHaveSameValue = allDice.every(
      (dice) => dice.value === allDice[0].value
    );
    // Game ends when all dice have the same value and are all selected
    if (allDiceAreFreezed && allDiceHaveSameValue) {
      setIsTenzies(true);
      if ((bestTime === null && bestGameRolls === null) || time < bestTime) {
        setBestTime(time);
        setBestGameRolls(rolls);
        saveToLocalStorage(time, rolls);
      }
    }
  }, [allDice]);
  console.log(bestTime, bestGameRolls);
  useEffect(() => {
    if (isTenzies) {
      setGameStarted(false);
    }

    let timer;
    if (gameStarted) {
      timer = setInterval(() => setTime((prevTime) => prevTime + 1), 10);
    }

    return () => clearInterval(timer);
  }, [time, gameStarted]);

  function generateNewDice() {
    return {
      value: Math.floor(Math.random() * 6 + 1),
      isFreezed: false,
      id: uuidv4(),
    };
  }

  function generateAllInitialDice() {
    const allInitialDice = [];
    for (let i = 0; i < 12; i++) {
      allInitialDice.push(generateNewDice());
    }
    return allInitialDice;
  }

  function handleDiceClick(id) {
    setAllDice((prevAllDice) =>
      prevAllDice.map((dice) =>
        dice.id === id ? { ...dice, isFreezed: !dice.isFreezed } : dice
      )
    );
  }

  function startGame() {
    setGameStarted(true);
  }

  function rollDice() {
    setAllDice((prevAlldice) =>
      prevAlldice.map((dice) => (dice.isFreezed ? dice : generateNewDice()))
    );
    setRolls((prevRolls) => prevRolls + 1);
  }

  function restartGame() {
    setAllDice(generateAllInitialDice());
    setIsTenzies(false);
    setGameStarted(true);
    setTime(0);
    setRolls(0);
  }

  return (
    <>
      {isTenzies && <Confetti />}
      <Header />
      <main>
        {isTenzies ? (
          <GameResult
            time={time}
            rolls={rolls}
            bestTime={bestTime}
            bestGameRolls={bestGameRolls}
          />
        ) : (
          <>
            <GameTracker time={time} rolls={rolls} />
            <Board
              allDice={allDice}
              handleDiceClick={handleDiceClick}
              gameStarted={gameStarted}
            />
          </>
        )}
        <Button
          startGame={startGame}
          rollDice={rollDice}
          restartGame={restartGame}
          isTenzies={isTenzies}
          gameStarted={gameStarted}
        />
      </main>
    </>
  );
}

export default TenziesGame;
