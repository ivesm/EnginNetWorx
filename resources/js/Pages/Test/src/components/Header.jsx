import logo from "../assets/game-logo.png";
function Header() {

  return (
    <header>
      <img src={logo}  alt=" GAME LOGO" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
}
export default Header;
