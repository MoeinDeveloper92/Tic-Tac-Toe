import React, { useState } from 'react'
import Square from './components/Square'
import { Patterns } from './components/Patterns';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({
    winner: "none",
    state: "none"
  })
  // by each movement we need to call a function to choose whether the pattern is met or not


  const chooseSquare = (square) => {
    setBoard(board.map((val, index) => {
      if (index == square && val == "") {
        // it pushes player to the board Array
        return player
      }

      return val;
    }))

    if (player === "X") {
      setPlayer("O")
    } else {
      setPlayer("X")
    }
  }

  // every time we make a movement we call this function

  const checkWin = () => {
    Patterns.forEach((curPattern) => {
      const firstPlayer = board[curPattern[0]];
      let foundWinnningPatter = true;
      curPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinnningPatter = false;
        }
      })

      if (foundWinnningPatter) {
        setResult({ winner: player, state: "won" })
      }
    })
  }


  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className='row'>
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className='row'>
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
    </div>
  )
}

export default App