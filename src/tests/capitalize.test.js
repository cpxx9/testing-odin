import capitalize from '.';

test('capitalizes string to String', () => {
  expect(capitalize('string')).toBe('String');
});

test('capitalizes cat to Cat', () => {
  expect(capitalize('cat')).toBe('Cat');
});
