// matchers también se le conoce
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'Tortoza';
  expect(data).toEqual({ name: 'nico', lastname: 'Tortoza' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Alejandro').toMatch(/andr/);
});
test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
