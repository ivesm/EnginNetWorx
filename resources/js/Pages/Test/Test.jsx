
import './index.css';
import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';

import Header from './src/components/Header.jsx' ;
import GameBoard from './src/components/GameBoard.jsx' ;
import Players from './src/components/Players.jsx' ;
import Log from './src/components/Log.jsx' ;

export default function Test() {

const [gameTurns ,setGameTurns] = useState([]) ;
const [activePlayer ,setActivePlayer] = useState('X') ;

function handleSelectSquare (rowIndex, colIndex){

    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ?'O':'X' );
    setGameTurns(prevTurns =>
    {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 &&prevTurns[0].player === 'X')
      {
         currentPlayer = 'O' ;
      }
      const updatedTurns = [{square:{row:rowIndex,col:colIndex},player: currentPlayer },...prevTurns];

      return updatedTurns ;
    }
  );
} ;

return (
  <>
    <Header/>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players intialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Players intialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard  onSelectSquare={handleSelectSquare}  turns={gameTurns}/>
    </div>
    <Log  turns={gameTurns}/>
    </main>

  </>
) ;
}
