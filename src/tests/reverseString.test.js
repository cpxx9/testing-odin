import reverseString from '../modules/reverseString';

test('reverse school to loohcs', () => {
  expect(reverseString('school')).toBe('loohcs');
});

test('reverse books to skoob', () => {
  expect(reverseString('books')).toBe('skoob');
});

test('reverse laughter to rethgual', () => {
  expect(reverseString('laughter')).toBe('rethgual');
});

test('reverse I like pizza to azzip ekil I', () => {
  expect(reverseString('I like pizza')).toBe('azzip ekil I');
});

test('Test palindrome', () => {
  expect(reverseString('racecar')).toBe('racecar');
});
