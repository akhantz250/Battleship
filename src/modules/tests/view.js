const viewController = (function () {
  const placementGrid = document.querySelector('.placement-grid');
  const initialize = function () {
    _makePlacementGrid();
  };
  function _makePlacementGrid() {
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.classList.add('placement-grid-square');
        square.dataset.y = y;
        square.dataset.x = x;
        square.addEventListener('click', (e) => {
          console.log(
            `You clicked x: ${e.target.dataset.x} y: ${e.target.dataset.y}`
          );
        });
        placementGrid.appendChild(square);
      }
    }
  }

  return { initialize };
})();

export { viewController };
