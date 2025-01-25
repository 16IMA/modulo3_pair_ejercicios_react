//Imports:
import Header from './Header';
import Board from './Board';
import '../styles/App.scss';
import { useState } from 'react';


//Function:

function App() {
 
  //Variables de estado:

  const [grogu, setGrogu] = useState('');
  const [eggs, setEggs] = useState('');
  const [frogs, setFrogs] = useState('');
  const [cookies, setCookies] = useState('');
  const [dieResult, setDieResult] = useState('');
  const [gameStatus, setGameStatus] = useState('');


  return (

  <>
    <Header />
    <main className="page">
      <Board />  
      <section>
        <button className="dice">Lanzar dado</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>Galletas
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>Huevos
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>Ranas
      <section>
        <button className="restart-button">Reiniciar juego</button>
      </section>
    </main>
    </>
  )
}

export default App
