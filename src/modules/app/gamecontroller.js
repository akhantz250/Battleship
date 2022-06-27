import { gameView } from '../views/gameView';
import { Player } from './player';

const gameController = (function () {
  let player1, player2, gamemode, turnNo, currentPlayerTurn;
  const createPlayer1 = function (board) {
    player1 = Player();
    if (board === null) {
      player1.placeRandom();
    } else {
      player1.makeBoard(board);
    }
    console.log(player1.gameboard.getShipLocation());
  };
  const createPlayer2 = function (board) {
    player2 = Player();
    if (board === null) {
      player2.placeRandom();
    } else {
      player2.makeBoard(board);
    }
    console.log(player2.gameboard.getShipLocation());
  };
  const startGame = function (mode) {
    gamemode = mode === 'player' ? 'player' : 'cpu';
    currentPlayerTurn = 1;
    turnNo = 1;
  };
  const getPlayerOneShips = function () {
    return player1.gameboard.getShipLocation();
  };
  const getPlayerTwoShips = function () {
    return player2.gameboard.getShipLocation();
  };
  const getPlayerOneBoard = function () {
    return player1.gameboard.getGameboard();
  };
  const getPlayerTwoBoard = function () {
    return player2.gameboard.getGameboard();
  };
  const changeTurn = function (x, y) {
    if (currentPlayerTurn === 1 && gamemode === 'player') {
      if (player2.takeAttack(x, y)) {
        const ship = getPlayerTwoShips();
        const displayBoard = getPlayerTwoBoard();
        const attackboard = getPlayerOneBoard();
        // load player 2's view
        currentPlayerTurn = 2;
        gameView.loadTurn(
          ship,
          displayBoard,
          attackboard,
          currentPlayerTurn,
          turnNo,
          gamemode
        );
        return true;
      } else {
        console.log('invalid move');
        return false;
      }
    } else if (currentPlayerTurn === 2 && gamemode === 'player') {
      if (player1.takeAttack(x, y)) {
        const ship = getPlayerOneShips();
        const displayBoard = getPlayerOneBoard();
        const attackBoard = getPlayerTwoBoard();
        // load player 1's view
        currentPlayerTurn = 1;
        turnNo++;
        gameView.loadTurn(
          ship,
          displayBoard,
          attackBoard,
          currentPlayerTurn,
          turnNo,
          gamemode
        );
        return true;
      } else {
        console.log('invalid move');
        return false;
      }
    } else if (gamemode === 'cpu') {
      if (player2.takeAttack(x, y)) {
        player1.takeRandomAttack();
        turnNo++;
        const ship = getPlayerOneShips();
        const displayBoard = getPlayerOneBoard();
        const attackBoard = getPlayerTwoBoard();
        gameView.loadTurn(
          ship,
          displayBoard,
          attackBoard,
          currentPlayerTurn,
          turnNo,
          gamemode
        );
      }
    }
    return false;
  };

  return {
    startGame,
    createPlayer1,
    createPlayer2,
    getPlayerOneShips,
    getPlayerTwoShips,
    getPlayerOneBoard,
    getPlayerTwoBoard,
    changeTurn,
  };
})();

export { gameController };
