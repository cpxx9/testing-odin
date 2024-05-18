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

test('Work with punctuation', () => {
  expect(caesarCipher('i! like, cole.', 1)).toBe('j! mjlf, dpmf.');
});

test('Work z wrapping to a', () => {
  expect(caesarCipher('pizza', 1)).toBe('qjaab');
});

test('Work with case', () => {
  expect(caesarCipher('Pizza Is Good', 1)).toBe('Qjaab Jt Hppe');
});
