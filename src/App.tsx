import TicTacToe from "./components/TicTacToe/TicTacToe";
import style from "./app.module.css";
import { TextEncrypted } from "./components/TextEncrypted/TextEncrypted";
function App() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <h1 className={style.game__title}>
          <TextEncrypted text="Tic Tac Toe Game" interval={80} />
        </h1>
        <TicTacToe />
      </div>
    </main>
  );
}

export default App;
