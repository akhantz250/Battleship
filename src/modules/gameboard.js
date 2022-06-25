import { Ship } from './ship';

const Gameboard = function () {
  const gameboard = _createBoard();

  const carrier = Ship(5, 'carrier');
  const battleship = Ship(4, 'battleship');
  const destroyer = Ship(3, 'destroyer');
  const submarine = Ship(3, 'submarine');
  const boat = Ship(2, 'boat');

  const shipLocation = {
    carrier: [],
    battleship: [],
    destroyer: [],
    submarine: [],
    boat: [],
  };

  function _createBoard() {
    const board = [];
    for (let y = 0; y < 10; y++) {
      const col = [];
      for (let x = 0; x < 10; x++) {
        col.push('O');
      }
      board.push(col);
    }
    return board;
  }
  // check within bounds and no-overlapping ships
  function _isPlaceableSquare(x, y) {
    if (gameboard[x][y] !== 'O') return false;
    else if (gameboard[x][y] === 'O') return true;
  }
  // stores ships' location in object
  function _storeShipLoaction(x, y, ship) {
    const xpos = x;
    const ypos = y;
    switch (ship) {
      case 'carrier':
        shipLocation.carrier.push({ x: xpos, y: ypos });
        break;
      case 'battleship':
        shipLocation.battleship.push({ x: xpos, y: ypos });
        break;
      case 'destroyer':
        shipLocation.destroyer.push({ x: xpos, y: ypos });
        break;
      case 'submarine':
        shipLocation.submarine.push({ x: xpos, y: ypos });
        break;
      case 'boat':
        shipLocation.submarine.push({ x: xpos, y: ypos });
        break;
      default:
        return false;
    }
  }

  const getGameboard = () => gameboard;
  const getShipLocation = () => shipLocation;

  // place ship by the "head"
  const placeShip = function (x, y, ship, horizontal) {
    if (x > 9 || y > 9) return false;
    let length;
    switch (ship) {
      case 'carrier':
        length = 5;
        break;
      case 'battleship':
        length = 4;
        break;
      case 'destroyer':
        length = 3;
        break;
      case 'submarine':
        length = 3;
        break;
      case 'boat':
        length = 2;
        break;
      default:
        return false;
    }
    if (horizontal) {
      // check bounds
      if (x + length > 10) return false;
      // look right
      for (let i = 0; i < length; i++) {
        if (!_isPlaceableSquare(x + i, y)) return false;
      }
      for (let j = 0; j < length; j++) {
        gameboard[x + j][y] = 'X';
        _storeShipLoaction(x + j, y, ship);
      }
      return true;
    } else {
      // check bounds
      if (y + length > 10) return false;
      // look down
      for (let i = 0; i < length; i++) {
        if (!_isPlaceableSquare(x, y + 1)) return false;
      }
      for (let j = 0; j < length; j++) {
        gameboard[x][y + j] = 'X';
        _storeShipLoaction(x, y + j, ship);
      }
      return true;
    }
  };

  const receiveAttack = function (x, y) {
    if (gameboard[x][y] === 'X' || gameboard[x][y] === 'O') {
      return true;
    } else return false;
  };

  const struckShip = function (x, y) {
    for (const key in shipLocation) {
      const length = shipLocation[key].length;
      for (let i = 0; i < length; i++) {
        if (
          shipLocation[key][i]['x'] === x &&
          shipLocation[key][i]['y'] === y
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const isFleetDestroyed = function () {};

  return {
    getGameboard,
    getShipLocation,
    placeShip,
    receiveAttack,
    struckShip,
    isFleetDestroyed,
  };
};

export { Gameboard };
