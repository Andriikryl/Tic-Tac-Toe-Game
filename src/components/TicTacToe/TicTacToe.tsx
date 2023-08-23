import { useState } from "react";
import styles from "./stlyle.module.css";
import {
  DIMENSIONS,
  PLAYER_X,
  PLAYER_O,
  SQUARE_DIMS,
} from "../../utiles/constants";

const emptyGrid = new Array(DIMENSIONS ** 2).fill(null);

export default function TicTacToe() {
  const [grid, setGrid] = useState(emptyGrid);
  const [players, setPlayers] = useState({
    human: PLAYER_X,
    ai: PLAYER_O,
  });

  const move = (index: number, player: number) => {
    setGrid((grid) => {
      const gridCopy = grid.concat();
      gridCopy[index] = player;
      return gridCopy;
    });
  };

  const humanMove = (index: number) => {
    if (!grid[index]) {
      move(index, players.human);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ width: `${DIMENSIONS * (SQUARE_DIMS + 5)}px` }}
    >
      {grid.map((value, index) => {
        const isActive = value !== null;

        return (
          <div
            key={index}
            className={styles.square}
            onClick={() => humanMove(index)}
          >
            {isActive && (
              <p className={styles.marker}>{value === PLAYER_X ? "X" : "O"}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
