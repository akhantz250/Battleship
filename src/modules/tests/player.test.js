import { Player } from '../player';

test('random place', () => {
  const player = Player();
  player.placeRandom();
  // console.log(player.gameboard.getShipLocation());
});

test('place ships', () => {
  const player = Player();
  expect(player.placeShip(5, 5, 'carrier', true)).toBe(true);
  expect(player.placeShip(0, 0, 'battleship', false)).toBe(true);
  // console.log(player.gameboard.getShipLocation());
});

test('attack ship', () => {
  const player = Player();
  expect(player.placeShip(5, 5, 'carrier', true)).toBe(true);
  expect(player.placeShip(4, 4, 'battleship', true)).toBe(true);
  expect(player.placeShip(3, 3, 'destroyer', true)).toBe(true);
  expect(player.placeShip(2, 2, 'submarine', true)).toBe(true);
  expect(player.placeShip(1, 1, 'boat', true)).toBe(true);
  player.attack(6, 5);
  player.attack(6, 7);
  const placement = player.getLegiblePlacement();
  expect(placement.length).toBe(98);
  console.log(player.gameboard.getGameboard());
});
