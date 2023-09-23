import { useState } from "react";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";

import confetti from 'canvas-confetti';
import { WinnerModal } from "./components/WinnerModal.jsx";
//npm install canvas-confetti -E

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');

    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  });
  //null, no hay ganador, false, hay empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    localStorage.removeItem('board');
    localStorage.removeItem('turn');
  }

  const updateBoard = (index) => {
    //no actualizamos esta posición si ya está ocupada o si ya hay ganador
    if (board[index] || winner) return;
    //actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn; // x or o
    setBoard(newBoard);//Asincrono

    //cambiamos de turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);//Asincrono

    //guardamos el tablero en el localstorage
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    //comprobamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();//disparamos los confettis
      setWinner(newWinner);//Asincrono
      return;
    } else if (checkEndGame(newBoard)) {//comprobamos si hay empate
      //si no hay ganador y no hay más movimientos
      setWinner(false);//Asincrono
    }
  }


  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
export default App
