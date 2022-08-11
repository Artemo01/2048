import Tile from '../Tile/Tile';
import './Board.css';

interface IBoard {
  matrix: number[][];
}

const Board = ({ matrix }: IBoard) => {
  const cells = matrix.map((row, rowIndex) => {
    return (
      <div className="board_row" key={rowIndex}>
        {row.map((col, colIndex) => (
          <Tile key={colIndex} num={col} />
        ))}
      </div>
    );
  });

  return <div className="board-wrapper">{cells}</div>;
};

export default Board;
