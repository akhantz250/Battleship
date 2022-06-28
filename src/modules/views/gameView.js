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
  let leftSide, rightSide, attackGrid, displayGrid, passScreen;

  const initialize = function () {
    target.innerHTML = ``;
    target.appendChild(content);
    _setUpAttackGrid();
    _setUpDisplayGrid();
    _setUpPassScreen();
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
  function _setUpPassScreen() {
    passScreen = document.querySelector('.pass-screen');
    const button = document.querySelector('#pass-screen-btn');
    button.addEventListener('click', () =>
      passScreen.classList.remove('show-screen')
    );
  }
  function _showPassScreen(currentPlayer) {
    passScreen.classList.add('show-screen');
    const textInfo = document.querySelector('#pass-screen-info');
    textInfo.textContent = `Pass the device to Player ${
      currentPlayer === 1 ? 'One' : 'Two'
    }`;
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
        'ship-head-horizontal',
        'ship-body-horizontal',
        'ship-tail-horizontal',
        'ship-head-vertical',
        'ship-body-vertical',
        'ship-tail-vertical',
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
      const length = ships[ship].length;
      const orientation =
        ships[ship][1]['x'] - ships[ship][0]['x'] === 1
          ? 'horizontal'
          : 'vertical';
      for (let i = 0; i < length; i++) {
        const xpos = ships[ship][i]['x'];
        const ypos = ships[ship][i]['y'];
        const square = document.querySelector(
          `.display-grid-square[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
        if (i === 0) {
          square.classList.add(`ship-head-${orientation}`);
        } else if (i === length - 1) {
          square.classList.add(`ship-tail-${orientation}`);
        } else {
          square.classList.add(`ship-body-${orientation}`);
        }
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
    if (mode === 'player') {
      _showPassScreen(currentPlayer);
      switchGridPos(currentPlayer);
    }
    renderAttackGrid(attackBoard);
    renderDisplayGrid(ships, displayBoard);
    updateInfo(currentPlayer, turnNo);
  };
  function updateInfo(currentPlayer, turnNo) {
    const player = currentPlayer === 1 ? 'One' : 'Two';
    const infoElement = document.querySelector('.game-info h2');
    infoElement.textContent = `Turn ${turnNo}: Player ${player}'s turn`;
  }
  function _setUpModal(winner, mode) {
    const modal = document.createElement('div');
    modal.classList.add('modal-container');
    modal.innerHTML = `
    <div class="modal">
        <h2 class="winner"></h2>
        <h3>Play again?</h3>
        <div class="modal-btn-container">
          <button id="btn-yes">Yes</button>
          <button id="btn-no">No</button>
        </div>
      </div>`;
    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(modal);
    const winnerElement = document.querySelector('.winner');
    if (mode === 'cpu' && winner === 2) {
      winnerElement.textContent = 'You lost.';
    } else {
      winnerElement.textContent =
        winner === 1 ? `Player One has won!` : 'Player Two has won!';
    }
    const yesBtn = document.querySelector('#btn-yes');
    const noBtn = document.querySelector('#btn-no');
    yesBtn.addEventListener('click', () => location.reload());
    noBtn.addEventListener('click', () => bodyElement.removeChild(modal));
  }
  function _createRevealGrid(ships, board) {
    const grid = document.createElement('div');
    grid.classList.add('reveal-grid');
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < 10; i++) {
        const square = document.createElement('div');
        square.classList.add('reveal-grid-square');
        square.dataset.x = j;
        square.dataset.y = i;

        if (board[i][j] === 'H') {
          square.classList.add('miss');
        } else if (board[i][j] === 'S') {
          square.classList.add('sunk');
        }
        for (const ship in ships) {
          const length = ships[ship].length;
          const orientation =
            ships[ship][1]['x'] - ships[ship][0]['x'] === 1
              ? 'horizontal'
              : 'vertical';
          for (let z = 0; z < length; z++) {
            const xpos = ships[ship][z]['x'];
            const ypos = ships[ship][z]['y'];
            if (i === xpos && j === ypos) {
              square.classList.add(`${ship}-color`);
              if (z === 0) {
                square.classList.add(`ship-head-${orientation}`);
              } else if (z === length - 1) {
                square.classList.add(`ship-tail-${orientation}`);
              } else {
                square.classList.add(`ship-body-${orientation}`);
              }
            }
          }
        }
        grid.appendChild(square);
      }
    }
    return grid;
  }
  const loadWin = function (winner, mode) {
    _setUpModal(winner, mode);
    if (winner === 1 || mode === 'cpu') {
      leftSide.removeChild(displayGrid);
      rightSide.removeChild(attackGrid);
    } else if (winner === 2) {
      leftSide.removeChild(attackGrid);
      rightSide.removeChild(displayGrid);
    }
    leftSide.appendChild(
      _createRevealGrid(
        gameController.getPlayerOneShips(),
        gameController.getPlayerOneBoard()
      )
    );
    rightSide.appendChild(
      _createRevealGrid(
        gameController.getPlayerTwoShips(),
        gameController.getPlayerTwoBoard()
      )
    );
    if (mode === 'cpu') {
      const winnerText = winner === 1 ? 'You have won!' : 'You have lost.';
      const infoElement = document.querySelector('.game-info h2');
      infoElement.textContent = winnerText;
    } else if (mode === 'player') {
      const winnerText = winner === 1 ? 'One' : 'Two';
      const infoElement = document.querySelector('.game-info h2');
      infoElement.textContent = `Player ${winnerText} has won!`;
    }
  };
  return { initialize, renderAttackGrid, loadTurn, loadWin };
})();
export { gameView };
