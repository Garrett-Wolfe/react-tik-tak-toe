import { useState } from "react";

function Node({ value, onClick, player, x, y }) {
  let color = "lightgray";
  if (value === "X") {
    color = "lightblue";
  } else if (value === "O") {
    color = "LightCoral";
  }

  return (
    <div className="node col" style={{ backgroundColor: color }} onClick={() => onClick(player, x, y)}>
      {value}
    </div>
  );
}

function Board() {
  const blankBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [player, setPlayer] = useState("X");
  const [boardArray, setBoardArray] = useState(blankBoard);

  const setVal = (player, x, y) => {
    if (boardArray[y][x]) {
      return;
    }
    setBoardArray((board) => {
      const newBoard = [...board];
      newBoard[y][x] = player;
      return newBoard;
    });
    setPlayer(player === "X" ? "O" : "X");
  };

  return (
    <div className="center-container">
      <button type="button" class="btn btn-primary" onClick={() => setBoardArray(blankBoard)}>
        Clear
      </button>
      <div className="container">
        <div className="row align-items-start">
          {boardArray[0].map((val, index) => (
            <Node value={val} onClick={setVal} player={player} x={index} y={0}></Node>
          ))}
        </div>
        <div className="row align-items-center">
          {boardArray[1].map((val, index) => (
            <Node value={val} onClick={setVal} player={player} x={index} y={1}></Node>
          ))}
        </div>
        <div className="row align-items-end">
          {boardArray[2].map((val, index) => (
            <Node value={val} onClick={setVal} player={player} x={index} y={2}></Node>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
