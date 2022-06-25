import { Gameboard } from '../gameboard';

test('Gives correct gameboard', () => {
  const board1 = Gameboard();
  expect(board1.getGameboard().length).toBe(10);
  expect(board1.getGameboard()[0].length).toBe(10);
  expect(board1.getGameboard()[9].length).toBe(10);
  expect(board1.getGameboard()[9][9]).toBe('O');
});

test('Places single ship correctly, case 1', () => {
  const board2 = Gameboard();
  expect(board2.placeShip(8, 8, 'boat', true)).toBe(true);
  expect(board2.placeShip(9, 9, 'boat', true)).toBe(false);
});

describe('Place carrier correctly', () => {
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(9, 9, 'carrier', false)).toBe(false);
  });
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(6, 6, 'carrier', false)).toBe(false);
  });
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(5, 9, 'carrier', true)).toBe(true);
  });
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(5, 9, 'carrier', false)).toBe(false);
  });
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(9, 5, 'carrier', true)).toBe(false);
  });
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(9, 5, 'carrier', false)).toBe(true);
  });
  test('', () => {
    const board2 = Gameboard();
    expect(board2.placeShip(10, 5, 'carrier', false)).toBe(false);
  });
});

describe('Attack ship', () => {
  test('Place and attack ship', () => {
    const board = Gameboard();
    const location = board.getShipLocation();
    board.placeShip(5, 9, 'carrier', true);
    expect(board.receiveAttack(9, 9)).toBe(true);
    expect(location.carrier.length).toBe(5);
    expect(location.carrier).toEqual([
      { x: 5, y: 9 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
    ]);
    expect(board.struckShip(5, 9)).toBe(true);
  });
  test('Place and attack ship', () => {
    const board = Gameboard();
    const location = board.getShipLocation();
    board.placeShip(5, 9, 'carrier', true);
    expect(board.receiveAttack(9, 9)).toBe(true);
    expect(location.carrier.length).toBe(5);
    expect(location.carrier).toEqual([
      { x: 5, y: 9 },
      { x: 6, y: 9 },
      { x: 7, y: 9 },
      { x: 8, y: 9 },
      { x: 9, y: 9 },
    ]);
    expect(board.struckShip(5, 8)).toBe(false);
  });
});
