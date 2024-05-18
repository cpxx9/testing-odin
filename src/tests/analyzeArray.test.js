import analyzeArray from '../modules/analyzeArray';

test('return array details', () => {
  expect(analyzeArray([0, 1, 2, 3, 4])).toEqual({
    average: 2,
    min: 0,
    max: 4,
    length: 5,
  });
});

test('return array details', () => {
  expect(analyzeArray([7, 2, 5, 1, 4])).toEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 5,
  });
});
