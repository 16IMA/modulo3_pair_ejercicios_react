import Grogu from "./Grogu"

function Board({ groguPosition }) {

    return (

        <section className="board">
            <div className="cell">{groguPosition === 0 && <Grogu />}</div>
            <div className="cell">{groguPosition === 1 && <Grogu />}</div>
            <div className="cell">{groguPosition === 2 && <Grogu />}</div>
            <div className="cell">{groguPosition === 3 && <Grogu />}</div>
            <div className="cell">{groguPosition === 4 && <Grogu />}</div>
            <div className="cell">{groguPosition === 5 && <Grogu />}</div>
            <div className="cell">{groguPosition === 6 && <Grogu />}</div>
        </section>

    )
}
export default Board