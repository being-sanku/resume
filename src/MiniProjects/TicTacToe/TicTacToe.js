import React, { useState } from "react";

import styles from "./TicTacToe.module.css";
import Board from "./Board";
function TicTacToe(props) {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState(-1);

  const winnerFound = (w) => {
    setWinner(w);
    alert(winner === 1 ? "Player X wins" : "Player O wins");
  };
  const resetBoard = () => {
    setReset(true);
    setWinner(-1);
  };
  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe</h1>
      <center>
        <Board
          reset={reset}
          setReset={setReset}
          winner={winner}
          setWinner={winnerFound}
        />
        <button onClick={resetBoard}>Reset</button>
      </center>
    </div>
  );
}

export default TicTacToe;
