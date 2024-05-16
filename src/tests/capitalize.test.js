import capitalize from '../modules/capitalize';

test('capitalizes string to String', () => {
  expect(capitalize('string')).toBe('String');
});

test('capitalizes cat to Cat', () => {
  expect(capitalize('cat')).toBe('Cat');
});

test('capitalizes fish to Fish', () => {
  expect(capitalize('fish')).toBe('Fish');
});

test('capitalizes dog to Dog', () => {
  expect(capitalize('dog')).toBe('Dog');
});
