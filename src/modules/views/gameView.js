import { gameController } from '../app/gamecontroller';
const gameView = (function () {
  const target = document.querySelector('.target');
  const content = document.createElement('div');
  content.innerHTML = `
  <div class="game-content">
        <div class="game-info"><h2>Turn 1: Player One's turn</h2></div>
        <div class="gameboard-container">
          <div class="left-side">
          </div>
          <div class="right-side">
          </div>
        </div>
      </div>
  `;
  let leftSide, rightSide, attackGrid, displayGrid;

  const initialize = function () {
    target.innerHTML = ``;
    target.appendChild(content);
    _setUpAttackGrid();
    _setUpDisplayGrid();
    leftSide = document.querySelector('.left-side');
    rightSide = document.querySelector('.right-side');
    leftSide.appendChild(displayGrid);
    rightSide.appendChild(attackGrid);
    renderAttackGrid(gameController.getPlayerTwoBoard());
    renderDisplayGrid(
      gameController.getPlayerOneShips(),
      gameController.getPlayerOneBoard()
    );
  };
  function _setUpAttackGrid() {
    attackGrid = document.createElement('div');
    attackGrid.classList.add('attack-grid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement('div');
        square.classList.add('attack-grid-square');
        square.dataset.x = j;
        square.dataset.y = i;
        square.addEventListener('click', (e) => {
          const xpos = parseInt(e.target.dataset.x);
          const ypos = parseInt(e.target.dataset.y);
          gameController.changeTurn(xpos, ypos);
        });
        attackGrid.appendChild(square);
      }
    }
  }
  function _setUpDisplayGrid() {
    displayGrid = document.createElement('div');
    displayGrid.classList.add('display-grid');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement('div');
        square.classList.add('display-grid-square');
        square.dataset.x = j;
        square.dataset.y = i;
        displayGrid.appendChild(square);
      }
    }
  }
  const renderAttackGrid = function (board) {
    const squares = document.querySelectorAll('.attack-grid-square');
    squares.forEach((square) => {
      square.classList.remove('sunk');
      square.classList.remove('miss');

      const ypos = parseInt(square.dataset.y);
      const xpos = parseInt(square.dataset.x);
      if (board[xpos][ypos] === 'S') {
        square.classList.add('sunk');
      } else if (board[xpos][ypos] === 'H') {
        square.classList.add('miss');
      }
    });
  };
  const renderDisplayGrid = function (ships, board) {
    const squares = document.querySelectorAll('.display-grid-square');
    squares.forEach((square) => {
      const classes = [
        'miss',
        'sunk',
        'carrier-color',
        'battleship-color',
        'destroyer-color',
        'submarine-color',
        'boat-color',
      ];
      square.classList.remove(...classes);
      const ypos = parseInt(square.dataset.y);
      const xpos = parseInt(square.dataset.x);
      if (board[xpos][ypos] === 'H') {
        square.classList.add('miss');
      } else if (board[xpos][ypos] === 'S') {
        square.classList.add('sunk');
      }
    });
    for (const ship in ships) {
      for (let i = 0; i < ships[ship].length; i++) {
        const xpos = ships[ship][i]['x'];
        const ypos = ships[ship][i]['y'];
        const square = document.querySelector(
          `.display-grid-square[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
      }
    }
  };
  function switchGridPos(activePlayer) {
    if (activePlayer === 2) {
      leftSide.removeChild(displayGrid);
      rightSide.removeChild(attackGrid);
      leftSide.appendChild(attackGrid);
      rightSide.appendChild(displayGrid);
    } else if (activePlayer === 1) {
      leftSide.removeChild(attackGrid);
      rightSide.removeChild(displayGrid);
      leftSide.appendChild(displayGrid);
      rightSide.appendChild(attackGrid);
    }
  }
  const loadTurn = function (
    ships,
    displayBoard,
    attackBoard,
    currentPlayer,
    turnNo,
    mode
  ) {
    if (mode === 'player') switchGridPos(currentPlayer);
    renderAttackGrid(attackBoard);
    renderDisplayGrid(ships, displayBoard);
    updateInfo(currentPlayer, turnNo);
  };
  function updateInfo(currentPlayer, turnNo) {
    const player = currentPlayer === 1 ? 'One' : 'Two';
    const infoElement = document.querySelector('.game-info h2');
    infoElement.textContent = `Turn ${turnNo}: Player ${player}'s turn`;
  }
  return { initialize, renderAttackGrid, loadTurn };
})();
export { gameView };
