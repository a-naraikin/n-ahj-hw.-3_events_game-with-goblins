import demo from '../app';

test('must return the received value', () => {
  expect(demo(42)).toBe(42);
});
