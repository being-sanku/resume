import React, { useSyncExternalStore } from "react";
import styles from "./Board.module.css";
import { useState } from "react";
import Box from "./Box";
let data = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
function Board(props) {
  const [turn, setTurn] = useState(0);
  const setWinner = props.setWinner;
  if (props.winner === 0) console.log(0);
  if (props.winner === 1) console.log(1);

  if (props.reset) {
    data = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
    props.setReset(false);
    console.log(data);
  }

  const draw = (e, r, c) => {
    data[r][c] = turn;
    checkTictac(r, c);
    console.log(data);
  };

  const getTurn = () => {
    return turn;
  };

  const checkTictac = (r, c) => {
    const n = 3;
    // check col
    for (let i = 0; i < n; i++) {
      if (data[r][i] !== turn) break;
      if (i == n - 1) setWinner(turn);
    }

    for (let i = 0; i < n; i++) {
      if (data[i][c] !== turn) break;
      if (i == n - 1) setWinner(turn);
    }
    if (r === c) {
      for (let i = 0; i < n; i++) {
        if (data[i][i] !== turn) break;
        if (i == n - 1) setWinner(turn);
      }
    }
    if (r + c === n - 1) {
      for (let i = 0; i < n; i++) {
        if (data[i][n - i - 1] != turn) break;
        if (i == n - 1) setWinner(turn);
      }
    }
    setTurn(turn === 0 ? 1 : 0);
  };

  return (
    <div className={styles.gridContainer}>
      <Box right bottom onClick={(e) => draw(e, 0, 0)} data={data[0][0]} />
      <Box right bottom onClick={(e) => draw(e, 0, 1)} data={data[0][1]} />
      <Box bottom onClick={(e) => draw(e, 0, 2)} data={data[0][2]} />

      <Box right onClick={(e) => draw(e, 1, 0)} data={data[1][0]} />
      <Box right onClick={(e) => draw(e, 1, 1)} data={data[1][1]} />
      <Box onClick={(e) => draw(e, 1, 2)} data={data[1][2]} />

      <Box right top onClick={(e) => draw(e, 2, 0)} data={data[2][0]} />
      <Box right top onClick={(e) => draw(e, 2, 1)} data={data[2][1]} />
      <Box top onClick={(e) => draw(e, 2, 2)} data={data[2][2]} />
    </div>
  );
}

export default Board;
