const helper = (function () {
  const randomTrueOrFalse = function () {
    return Math.floor(Math.random() * 2) === 0 ? false : true;
  };
  const getRandomInt = function (n) {
    return Math.floor(Math.random() * n);
  };
  const shipInfo = function (name) {
    if (name === 'carrier') {
      return { ship: name, length: 5 };
    } else if (name === 'battleship') {
      return { ship: name, length: 4 };
    } else if (name === 'destroyer') {
      return { ship: name, length: 3 };
    } else if (name === 'submarine') {
      return { ship: name, length: 3 };
    } else if (name === 'boat') {
      return { ship: name, length: 2 };
    }
  };
  return { randomTrueOrFalse, getRandomInt, shipInfo };
})();

export { helper };
