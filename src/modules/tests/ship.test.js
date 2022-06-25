import { Ship } from '../ship';

describe('Test ship of length 4', () => {
  test('Test sunk', () => {
    const testShip = Ship(4);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    testShip.hit(4);
    expect(testShip.isSunk()).toBe(true);
  });

  test('Test not sunk', () => {
    const testShip = Ship(4);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(4);
    expect(testShip.isSunk()).toBe(false);
  });
});

describe('Test ship of length 2', () => {
  test('Test sunk', () => {
    const testShip = Ship(2);
    testShip.hit(1);
    testShip.hit(2);
    expect(testShip.isSunk()).toBe(true);
  });

  test('Test not sunk', () => {
    const testShip = Ship(4);
    testShip.hit(1);
    expect(testShip.isSunk()).toBe(false);
  });
});
