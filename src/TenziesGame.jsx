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

  return (
    <>
      <Header />
      <main>
        <Board allDice={allDice} />
        <Button />
      </main>
    </>
  );
}

export default TenziesGame;
