import { gameController } from '../app/gamecontroller';
import { helper } from '../app/helper';
import { Player } from '../app/player';
const placementView = (function () {
  let selectedShip;
  let placementOrientation;
  let gamemode;
  let playersSet = 0;
  const shipData = {
    carrier: { location: [], facing: null },
    battleship: { location: [], facing: null },
    destroyer: { location: [], facing: null },
    submarine: { location: [], facing: null },
    boat: { location: [], facing: null },
  };
  let placementGrid;
  let content = document.querySelector('.target');
  const initialize = function () {
    content.innerHTML = `
    <div class="main-content">
    <h2 class="placement-info">Player n choose board</h2>
    <div class="placement-container">
      <div class="button-panel">
        <button id="rotate-btn">Rotate</button>
        <button id="randomise-btn">Randomise</button>
        <button id="reset-btn">Reset</button>
        <button id="go-btn" disabled>Go</button>
      </div>
      <div class="placement-grid"></div>
      <div class="ship-panel">
        <h3>Place your ships</h3>
        <div class="ship-button-container"></div>
      </div>
    </div>
  </div>
    `;
    placementGrid = document.querySelector('.placement-grid');
    selectedShip = null;
    placementOrientation = 'horizontal';
    _clearShipData();
    _updateTurnDisplay();
    _makePlacementGrid();
    _makeButtons();
    _setUpControlBtns();
  };
  const setGamemode = function (mode) {
    if (mode === 'player') {
      gamemode = mode;
      return true;
    } else if (mode === 'cpu') {
      gamemode = mode;
      return true;
    } else return false;
  };
  function _makePlacementGrid() {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.classList.add('placement-grid-square');
        square.dataset.y = y;
        square.dataset.x = x;
        square.addEventListener('mouseenter', (e) => {
          if (selectedShip === null) return false;
          displayShipOnView(x, y);
        });
        square.addEventListener('mouseleave', (e) => {
          clearDisplayShip();
        });

        square.addEventListener(
          'contextmenu',
          (e) => {
            e.preventDefault();
            const shipName = e.target.dataset.shiptype;
            if (removeShip(shipName)) {
              renderGrid();
              _makeButtons();
              clearDisplayShip();
              displayShipOnView(x, y);
            }
            return false;
          },
          false
        );
        square.addEventListener('click', () => {
          if (selectedShip === null) return;
          if (addShip(x, y, selectedShip, placementOrientation)) {
            renderGrid();
            selectedShip = null;
            _makeButtons();
            clearDisplayShip();
            displayShipOnView(x, y);
          }
        });

        placementGrid.appendChild(square);
      }
    }
  }
  function _setUpControlBtns() {
    const rotateBtn = document.querySelector('#rotate-btn');
    const resetBtn = document.querySelector('#reset-btn');
    const randomBtn = document.querySelector('#randomise-btn');
    const goBtn = document.querySelector('#go-btn');
    rotateBtn.addEventListener('click', () => {
      placementOrientation =
        placementOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    });
    resetBtn.addEventListener('click', () => {
      removeShip('carrier');
      removeShip('battleship');
      removeShip('destroyer');
      removeShip('submarine');
      removeShip('boat');
      renderGrid();
      _makeButtons();
    });
    randomBtn.addEventListener('click', () => {
      removeShip('carrier');
      removeShip('battleship');
      removeShip('destroyer');
      removeShip('submarine');
      removeShip('boat');
      const board = _getRandomBoard();
      _addRandomBoard(board);
      _makeButtons();
      renderGrid();
      selectedShip = null;
    });
    goBtn.addEventListener('click', () => {
      if (gamemode === 'cpu') {
        console.log('game started');
        const board = Object.assign({}, shipData);
        gameController.createPlayer1(board);
        gameController.createPlayer2(null);
        // gameController.startGame();
        // gameView.initialize();
      } else if (gamemode === 'player') {
        if (playersSet === 0) {
          playersSet++;
          const board = Object.assign({}, shipData);
          gameController.createPlayer1(board);
          initialize();
        } else if (playersSet === 1) {
          const board = Object.assign({}, shipData);
          gameController.createPlayer2(board);
          console.log('player 2 set');
        }
      }
    });
  }
  // returns true or false if mouseover sqaure is a valid placement
  function checkValidPlacement(x, y, length, orientation) {
    // check out of bounds
    if (orientation === 'horizontal') {
      if (x + length > 10) return false;
    } else if (orientation === 'vertical') {
      if (y + length > 10) return false;
    }
    // check no overlap, ennumerate shiplocation
    for (let ship in shipData) {
      for (let j = 0; j < shipData[ship].location.length; j++) {
        for (let i = 0; i < length; i++) {
          const checkX = orientation === 'horizontal' ? x + i : x;
          const checkY = orientation === 'vertical' ? y + i : y;
          if (
            shipData[ship]['location'][j]['x'] === checkX &&
            shipData[ship]['location'][j]['y'] === checkY
          )
            return false;
        }
      }
    }
    return true;
  }
  // highlight red or green ship on grid
  function displayShipOnView(x, y) {
    if (selectedShip === null) return;
    const length = helper.shipInfo(selectedShip).length;
    const orientation = placementOrientation;
    const isValid = checkValidPlacement(x, y, length, orientation);

    if (isValid)
      for (let i = 0; i < length; i++) {
        const xpos = orientation === 'horizontal' ? x + i : x;
        const ypos = orientation === 'vertical' ? y + i : y;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add('valid-square');
      }
    else {
      for (let i = 0; i < length; i++) {
        const xpos = orientation === 'horizontal' ? x + i : x;
        const ypos = orientation === 'vertical' ? y + i : y;
        if (xpos > 9 || ypos > 9) break;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add('invalid-square');
      }
    }
  }
  // clears valid or invalid square when hovering
  function clearDisplayShip() {
    const squares = document.querySelectorAll('.placement-grid > *');
    squares.forEach((square) => {
      square.classList.remove('invalid-square');
      square.classList.remove('valid-square');
    });
  }
  // callback for click square placement event if valid placed
  function addShip(x, y, name, orientation) {
    const length = helper.shipInfo(name).length;
    if (!checkValidPlacement(x, y, length, orientation)) {
      console.log('not possible');
      return false;
    }
    if (shipData[name].location.length !== 0) {
      alert(`${name} already exists`);
      return false;
    } //prevents overwriting
    const location = [];
    for (let i = 0; i < length; i++) {
      const coord = {};
      const xpos = orientation === 'horizontal' ? x + i : x;
      const ypos = orientation === 'vertical' ? y + i : y;
      coord.x = xpos;
      coord.y = ypos;
      location.push(coord);
    }
    shipData[name].location = location;
    shipData[name].facing = orientation;
    _checkStartCondition();
    return true;
  }
  function removeShip(name) {
    if (name === undefined) return false;
    shipData[name].location = [];
    shipData[name].facing = null;
    _checkStartCondition();
    return true;
  }
  function renderGrid() {
    const squares = document.querySelectorAll('.placement-grid > *');
    squares.forEach((square) => {
      square.classList.remove('carrier-color');
      square.classList.remove('battleship-color');
      square.classList.remove('destroyer-color');
      square.classList.remove('submarine-color');
      square.classList.remove('boat-color');
      square.removeAttribute('data-shiptype', '');
    });
    for (const ship in shipData) {
      shipData[ship]['location'].forEach((coord) => {
        const xpos = coord.x;
        const ypos = coord.y;
        const square = document.querySelector(
          `[data-x="${xpos}"][data-y="${ypos}"]`
        );
        square.classList.add(`${ship}-color`);
        square.dataset.shiptype = ship;
      });
    }
  }
  function _makeButtons() {
    let first = false;
    const container = document.querySelector('.ship-button-container');
    let carrierBtn, battleshipBtn, destroyerBtn, submarineBtn, boatBtn;
    container.innerHTML = '';
    if (shipData['carrier'].location.length === 0) {
      carrierBtn = document.createElement('button');
      carrierBtn.setAttribute('id', 'carrier-btn');
      carrierBtn.textContent = 'Carrier';
      container.appendChild(carrierBtn);
      if (first === false) {
        first = true;
        selectedShip = 'carrier';
        carrierBtn.setAttribute('selected', '');
        carrierBtn.classList.add('selected');
      }
    }
    if (shipData['battleship'].location.length === 0) {
      battleshipBtn = document.createElement('button');
      battleshipBtn.setAttribute('id', 'battleship-btn');
      battleshipBtn.textContent = 'Battleship';
      container.appendChild(battleshipBtn);
      if (first === false) {
        first = true;
        selectedShip = 'battleship';
        battleshipBtn.setAttribute('selected', '');
        battleshipBtn.classList.add('selected');
      }
    }
    if (shipData['destroyer'].location.length === 0) {
      destroyerBtn = document.createElement('button');
      destroyerBtn.setAttribute('id', 'destroyer-btn');
      destroyerBtn.textContent = 'Destroyer';
      container.appendChild(destroyerBtn);
      if (first === false) {
        first = true;
        selectedShip = 'destroyer';
        destroyerBtn.setAttribute('selected', '');
        destroyerBtn.classList.add('selected');
      }
    }
    if (shipData['submarine'].location.length === 0) {
      submarineBtn = document.createElement('button');
      submarineBtn.setAttribute('id', 'submarine-btn');
      submarineBtn.textContent = 'Submarine';
      container.appendChild(submarineBtn);
      if (first === false) {
        first = true;
        selectedShip = 'submarine';
        submarineBtn.setAttribute('selected', '');
        submarineBtn.classList.add('selected');
      }
    }
    if (shipData['boat'].location.length === 0) {
      boatBtn = document.createElement('button');
      boatBtn.setAttribute('id', 'boat-btn');
      boatBtn.textContent = 'Patrol';
      container.appendChild(boatBtn);
      if (first === false) {
        first = true;
        selectedShip = 'boat';
        boatBtn.setAttribute('selected', '');
        boatBtn.classList.add('selected');
      }
    }

    const allBtns = document.querySelectorAll(
      '.ship-button-container > button'
    );
    if (shipData['carrier'].location.length === 0) {
      carrierBtn.addEventListener('click', (e) => {
        if (selectedShip === 'carrier') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'carrier';
        }
      });
    }
    if (shipData['battleship'].location.length === 0) {
      battleshipBtn.addEventListener('click', (e) => {
        if (selectedShip === 'battleship') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'battleship';
        }
      });
    }
    if (shipData['destroyer'].location.length === 0) {
      destroyerBtn.addEventListener('click', (e) => {
        if (selectedShip === 'destroyer') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'destroyer';
        }
      });
    }
    if (shipData['submarine'].location.length === 0) {
      submarineBtn.addEventListener('click', (e) => {
        if (selectedShip === 'submarine') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'submarine';
        }
      });
    }
    if (shipData['boat'].location.length === 0) {
      boatBtn.addEventListener('click', (e) => {
        if (selectedShip === 'boat') {
          e.target.classList.remove('selected');
          selectedShip = null;
        } else {
          allBtns.forEach((element) => {
            element.classList.remove('selected');
          });
          e.target.classList.add('selected');
          selectedShip = 'boat';
        }
      });
    }
  }
  function _getRandomBoard() {
    const player = Player();
    player.placeRandom();
    const board = player.getBoard();
    const location = board.getShipLocation();
    return location;
  }
  function _addRandomBoard(board) {
    for (let ship in board) {
      let shipOrientation;
      const coordX = board[ship][0]['x'];
      const coordY = board[ship][0]['y'];
      if (board[ship][1]['x'] - board[ship][0]['x'] === 1) {
        shipOrientation = 'horizontal';
      } else shipOrientation = 'vertical';
      addShip(coordX, coordY, ship, shipOrientation);
    }
  }
  function _checkStartCondition() {
    const startBtn = document.querySelector('#go-btn');
    for (let ship in shipData) {
      if (shipData[ship].location.length === 0) {
        startBtn.setAttribute('disabled', '');
        return false;
      }
    }
    startBtn.removeAttribute('disabled');
    return true;
  }
  function _clearShipData() {
    for (let ship in shipData) {
      shipData[ship].location = [];
      shipData[ship].facing = null;
    }
  }
  function _updateTurnDisplay() {
    const infoDisplay = document.querySelector('.placement-info');
    infoDisplay.textContent = `Player ${playersSet + 1}'s turn to place`;
  }

  return { initialize, setGamemode };
})();

export { placementView };
