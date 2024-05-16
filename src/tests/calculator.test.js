import calculator from '../modules/calculator';

test('calculate 1 + 1 = 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('calculate 2 + 2 = 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('calculate 5.2 + 11.7 = 16.9', () => {
  expect(calculator.add(5.2, 11.7)).toBe(16.9);
});
