const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// Prueba con Stub y Spies

// Spies
const mockGetAll = jest.fn();

// Creamos entornos de pruebas enlatada
// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

// Aquí hacemos una susplantación para NO utilizar el entorno REAL (Mala práctica)
// Sino datos creados para eso (Los que están arriba)
// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));
// Si hay un llamado a la librería mongo.lib, entonces implementar el Stub: MongoLibStub

// Otra forma de hacerlo ya que no estamos guardando los Moks en la carpeta de Jest
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksDervices', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // Limpiar datos para cada prueba
  });

  describe('test form getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      // Espiamos si fue llamado el MongoLib
      expect(mockGetAll).toHaveBeenCalled();
      // Espiamos cuantas veces fue llamado, debe ser 1
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // Espiamos si fue llamado con los parámetros (librería, query vacío)
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
