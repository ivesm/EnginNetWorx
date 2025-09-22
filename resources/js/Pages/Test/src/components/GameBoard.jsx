
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],

] ;
function GameBoard({onSelectSquare, turns}) {

let gameBoard = initialGameBoard ;

for(const turn of turns){

  const {square , player} = turn ;
  const {row , col} = square ;
  gameBoard[row][col] = player ;

}
/*const [gameBoard, setgameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex , colIndex ){

      setgameBoard((prevGameBoard) =>
        {
          const upDatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
          upDatedBoard[rowIndex][colIndex] = activePlayerSymbol ;
          return upDatedBoard ;
        }
     ) ;

     onSelectSquare() ;
  }; */

  return (

        <ol id="game-board">

          {gameBoard.map((row , rowIndex) =>

            <li key ={rowIndex}>

              <ol>
                {row.map((playerSymbol , colIndex) =>

                  <li key ={colIndex}>
                     <button onClick={ ()=> onSelectSquare(rowIndex,colIndex)} > {playerSymbol}</button> 
                   </li>
                )}
              </ol>
            </li>
          )}
        </ol>


  );
}
export default GameBoard;
