//Imports:
import Header from './Header';
import Board from './Board';
import '../styles/App.scss';
import { useState } from 'react';


//Function:


function App() {

  //Variables de estado:
  const [randomNumber, setRandomNumber] = useState('');
  const [groguPosition, setGroguPosition] = useState(0);
  const [eggs, setEggs] = useState('');
  const [frogs, setFrogs] = useState('');
  const [cookies, setCookies] = useState('');
  const [diceResult, setDiceResult] = useState('');
  const [gameStatus, setGameStatus] = useState('');


  function getRandomInt() {
    const number = Math.floor(Math.random() * 4) + 1;
    setRandomNumber(number);
    console.log(number);

    return number;
  }

  const handleClick = (ev) => {
    // Gen num aleat
    const number = getRandomInt();
    // Castillo de if

    if (number === 4) {
      setGroguPosition(groguPosition + 1);
    }


    if (groguPosition > 6) {
      setGameStatus('winner')
    }


    rollDice();

  }


  const rollDice = () => {
    getRandomInt();
  }



  return (

    <>
      <Header />
      <main className="page">
        <Board groguPosition={groguPosition} />
        <section>
          <button className="dice" onClick={handleClick} >Lanzar dado</button>
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
