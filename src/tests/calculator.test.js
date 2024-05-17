import calculator from '../modules/calculator';

describe('add method tests', () => {
  test('calculate 1 + 1 = 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test('calculate 2 + 2 = 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('calculate 5.2 + 11.7 = 16.9', () => {
    expect(calculator.add(5.2, 11.7)).toBe(16.9);
  });
});

describe('subtraction method tests', () => {
  test('calculate 5 - 3 = 2', () => {
    expect(calculator.sub(5, 2)).toBe(3);
  });

  test('calculate 7 - 3 = 4', () => {
    expect(calculator.sub(7, 3)).toBe(4);
  });

  test('calculate 7.6 - 3.2 = 4.4', () => {
    expect(calculator.sub(7.6, 3.2)).toBeCloseTo(4.4);
  });
});

describe('multiplication method tests', () => {
  test('calculate 7 * 3 = 21', () => {
    expect(calculator.mul(7, 3)).toBeCloseTo(21);
  });

  test('calculate 7 * 4 = 28', () => {
    expect(calculator.mul(7, 4)).toBeCloseTo(28);
  });
});
