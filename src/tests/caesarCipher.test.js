import caesarCipher from '../modules/caesarCipher';

test('Change cole to dpmf', () => {
  expect(caesarCipher('cole')).toBe('dpmf');
});

test('Change hotdog to ipueph', () => {
  expect(caesarCipher('ipueph')).toBe('ipueph');
});
