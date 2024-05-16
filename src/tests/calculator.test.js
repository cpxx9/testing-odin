import calculator from '../modules/calculator';

test('calculate 1 + 1 = 2', () => {
  expect(calculator.add(1, 1)).toBe(2);
});
