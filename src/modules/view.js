import { helper } from './helper';
const viewController = (function () {
  let selectedShip = 'carrier';
  let placementOrientation = 'horizontal';
  const shipLocation = {
    carrier: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
    ],
    battleship: [],
    destroyer: [],
    submarine: [],
    boat: [],
  };
  const placementGrid = document.querySelector('.placement-grid');
  const initialize = function () {
    _makePlacementGrid();
    _setUpPlacementBtns();
    _setUpControlBtns();
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
        placementGrid.appendChild(square);
      }
    }
  }
  function _setUpPlacementBtns() {
    const carrierBtn = document.querySelector('#carrier-btn');
    const battleshipBtn = document.querySelector('#battleship-btn');
    const destroyerBtn = document.querySelector('#destroyer-btn');
    const submarineBtn = document.querySelector('#submarine-btn');
    const patrolBtn = document.querySelector('#patrol-btn');
    const allBtns = document.querySelectorAll(
      '.ship-button-container > button'
    );

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
    patrolBtn.addEventListener('click', (e) => {
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
  function _setUpControlBtns() {
    const rotateBtn = document.querySelector('#rotate-btn');
    rotateBtn.addEventListener('click', () => {
      placementOrientation =
        placementOrientation === 'horizontal' ? 'vertical' : 'horizontal';
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
    for (let ship in shipLocation) {
      for (let j = 0; j < shipLocation[ship].length; j++) {
        for (let i = 0; i < length; i++) {
          const checkX = orientation === 'horizontal' ? x + i : x;
          const checkY = orientation === 'vertical' ? y + i : y;
          if (
            shipLocation[ship][j]['x'] === checkX &&
            shipLocation[ship][j]['y'] === checkY
          )
            return false;
        }
      }
    }
    return true;
  }
  // highlight red or green ship on grid
  function displayShipOnView(x, y) {
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
  function clearDisplayShip() {
    const squares = document.querySelectorAll('.placement-grid > *');
    squares.forEach((square) => {
      square.classList.remove('invalid-square');
      square.classList.remove('valid-square');
    });
  }
  // callback for click square placement event if valid placed
  function placeShipGrid() {}

  return { initialize };
})();

export { viewController };
