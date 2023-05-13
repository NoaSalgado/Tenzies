import { useState } from 'react';
import Header from './Header';
import Board from './Board';
import Button from './Button';

import { v4 as uuidv4 } from 'uuid';

function TenziesGame() {
  const [allDice, setAllDice] = useState(generateAllInitialDice());

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

  function rollDice() {
    setAllDice((prevAlldice) =>
      prevAlldice.map((dice) => (dice.isFreezed ? dice : generateNewDice()))
    );
  }

  return (
    <>
      <Header />
      <main>
        <Board allDice={allDice} handleDiceClick={handleDiceClick} />
        <Button rollDice={rollDice} />
      </main>
    </>
  );
}

export default TenziesGame;
