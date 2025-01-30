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
  const [cookies, setCookies] = useState(3); //1
  const [frogs, setFrogs] = useState(3); //2
  const [eggs, setEggs] = useState(3); //3 
  const [diceResult, setDiceResult] = useState('');
  const [gameStatus, setGameStatus] = useState('');


  function getRandomInt() {
    const number = Math.floor(Math.random() * 4) + 1;
    setRandomNumber(number);
    console.log(number);
    return number;
  }

  const handleClick = (ev) => {
    ev.preventDefault();
    // Gen num aleat
    const number = getRandomInt();
    // Castillo de if

    if (number === 4) {
      setGroguPosition(groguPosition + 1);
    }

    if (groguPosition > 6) {
      setGameStatus('Grogu ganador')
    }

    if (number === 1) {
      setCookies(cookies - 1);
    }

    if (cookies === 0) {
      setGameStatus('¡Galletas descargadas!');
    }

    if (number === 2) {
      setEggs(eggs - 1);
    }

    if (eggs === 0) {
      setGameStatus('¡Huevos descargados!');
    }

    if (number === 3) {
      setFrogs(frogs - 1);
    }

    if (frogs === 0) {
      setGameStatus('¡Ranas descargadas!');
    }

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

          <h2>Galletas</h2>

          <div className="goods-item">{cookies === 3 && '🍪'} </div>
          <div className="goods-item">{cookies === 3 && '🍪'} {cookies === 2 && '🍪'}</div>
          <div className="goods-item">{cookies === 3 && '🍪'} {cookies === 2 && '🍪'} {cookies === 1 && '🍪'}</div>
          <div className="goods-item">{cookies < 1 && `¡Galletas descargadas!`} </div>
        </section>

        <section className="goods-container">

          <h2>Huevos</h2>

          <div className="goods-item">{eggs === 3 && '🥚'} </div>
          <div className="goods-item">{eggs === 3 && '🥚'} {eggs === 2 && '🥚'}</div>
          <div className="goods-item">{eggs === 3 && '🥚'} {eggs === 2 && '🥚'} {eggs === 1 && '🥚'}</div>
          <div className="goods-item">{eggs < 1 && `¡Huevos descargados!`} </div>

        </section>

        <section className="goods-container">

          <h2>Ranas</h2>

          <div className="goods-item">{frogs === 3 && '🐸'} </div>
          <div className="goods-item">{frogs === 3 && '🐸'} {frogs === 2 && '🐸'}</div>
          <div className="goods-item">{frogs === 3 && '🐸'} {frogs === 2 && '🐸'} {frogs === 1 && '🐸'}</div>
          <div className="goods-item">{frogs < 1 && `¡Ranas descargadas!`} </div>

        </section>

        <section>
          <button className="restart-button">Reiniciar juego</button>
        </section>
      </main>
    </>
  )
}

export default App
