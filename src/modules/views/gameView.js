import { gameController } from '../app/gamecontroller';
const gameView = (function () {
  const target = document.querySelector('.target');
  const content = document.createElement('div');
  content.innerHTML = `
  <div class="game-content">
        <div class="game-info"><h2>Turn 1: Player One's turn</h2></div>
        <div class="gameboard-container">
          <div class="left-side">
            <div class="display-grid"></div>
          </div>
          <div class="right-side">
            <div class="attack-grid"></div>
          </div>
        </div>
      </div>
  `;
  const initialize = function () {
    target.innerHTML = ``;
    target.appendChild(content);
  };
  return { initialize };
})();
export { gameView };
