import Header from './Header';
import Board from './Board';
import '../styles/App.scss';


function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
