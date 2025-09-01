
import Players from "./Players.jsx" ;

function GameBoard() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players intialName="Player 1" symbol="X"/>
          <Players intialName="Player 2" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}
export default GameBoard;
