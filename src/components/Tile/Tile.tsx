import './Tile.css';

interface ITile {
  num: number;
}

const Tile = ({ num }: ITile) => {
  const getColour = (num: number) => {
    switch (num) {
      case 2:
        return 'rgb(187, 222, 251)';
      case 4:
        return 'rgb(187, 222, 251)';
      case 8:
        return 'rgb(108, 184, 244)';
      case 16:
        return 'rgb(75, 144, 234)';
      case 32:
        return 'rgb(35, 124, 214)';
      case 64:
        return 'rgb(40, 90, 240)';
      case 128:
        return 'rgb(117, 40, 179)';
      case 256:
        return 'rgb(168, 40, 179)';
      case 512:
        return 'rgb(179, 40, 133)';
      case 1024:
        return 'rgb(151, 16, 88)';
      case 2048:
        return 'rgb(151, 16, 90)';
      default:
        return 'rgba(255, 255, 255, 0.171)';
    }
  };
  return (
    <div className="tile" style={{ backgroundColor: getColour(num) }}>
      {num === 0 ? '' : num}
    </div>
  );
};

export default Tile;
