import { placementView } from './placementView';
const selectionView = (function () {
  const target = document.querySelector('.target');
  const initialize = function () {
    target.innerHTML = `
    <div class="select-content">
        <div class="select-panel">
          <h2>GAMEMODE</h2>
          <div class="select-btn-container">
            <button id="player">PLAYER</button>
            <button id="cpu">CPU</button>
          </div>
        </div>
      </div>
    `;
    const playerModeBtn = document.querySelector('#player');
    const cpuModeBtn = document.querySelector('#cpu');
    playerModeBtn.addEventListener('click', () => {
      if (placementView.setGamemode('player')) placementView.initialize();
    });
    cpuModeBtn.addEventListener('click', () => {
      if (placementView.setGamemode('cpu')) placementView.initialize();
    });
  };
  return { initialize };
})();
export { selectionView };
