const Person = require('./06-person');

// AAA
// Arrange
// Act
// Assert
describe('Test for Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
