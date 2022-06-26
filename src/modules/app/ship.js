const Ship = function (length) {
  const shipLength = length;
  let damage = [];
  for (let i = 0; i < length; i++) {
    damage.push(false);
  }
  const hit = function (position) {
    if (position > length) return;
    damage[position - 1] = true;
  };
  const isSunk = function () {
    if (damage.includes(false)) {
      return false;
    } else return true;
  };
  return { hit, isSunk, shipLength };
};

export { Ship };
