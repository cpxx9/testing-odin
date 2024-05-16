import reverseString from '../modules/reverseString';

test('reverse school to loohcs', () => {
  expect(reverseString('school')).toBe('loohcs');
});

test('reverse books to skoob', () => {
  expect(reverseString('books')).toBe('skoob');
});
