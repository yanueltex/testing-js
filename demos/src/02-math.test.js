const { sum, multiply, divide } = require('./02-math');

describe('test for math', () => {
  describe('test for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('test for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });
  describe('test for divide', () => {
    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });
  });
});
