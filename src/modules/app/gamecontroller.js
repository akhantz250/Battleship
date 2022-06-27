import { Player } from './player';

const gameController = (function () {
  let player1, player2;
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
  const startGame = function () {};

  return { startGame, createPlayer1, createPlayer2 };
})();

export { gameController };
