import caesarCipher from '../modules/caesarCipher';

test('Change cole to dpmf', () => {
  expect(caesarCipher('cole')).toBe('dpmf');
});

test('Change hotdog to ipueph', () => {
  expect(caesarCipher('hotdog')).toBe('ipueph');
});

test('Work with key other than 1', () => {
  expect(caesarCipher('fun', 2)).toBe('hwp');
});
