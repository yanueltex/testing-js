describe('Grupo 1', () => {
  beforeAll(() => {
    console.log('BeforeAll');
    // Por ejemplo cargar antes una base de datos
  });

  afterAll(() => {
    console.log('afterAll');
    // Por ejemplo apagar la base de datos
  });

  beforeEach(() => {
    console.log('beforeEach');
    // Por ejemplo cargar un valor por cada prueba
  });

  afterEach(() => {
    console.log('afterEach');
    // Por ejemplo borrar un valor por cada prueba
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('Grupo 2', () => {
    beforeAll(() => {
      console.log('BeforeAll');
      // Por ejemplo cargar antes una base de datos
    });
    afterAll(() => {
      console.log('afterAll');
      // Por ejemplo apagar la base de datos
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
