/**
 * Pruebas unitarias - Servicio de Usuarios
 * Autor: Veronica Thalia Campoverde Maza
 */

describe('Servicio REST de Usuarios', () => {

  it('Debe devolver un usuario válido con id 1', async () => {
    // Arrange
    const userId = 1;
    const url = `http://localhost:3000/api/users/${userId}`;

    // Act
    const response = await fetch(url);
    const data = await response.json();

    // Assert
    expect(data.id).toBe(1);
    expect(data.name).toBeDefined();
  });

  it('Debe devolver error 404 si el usuario no existe', async () => {
    // Arrange
    const userId = 999;
    const url = `http://localhost:3000/api/users/${userId}`;

    // Act
    const response = await fetch(url);

    // Assert
    expect(data.id).toBe(1);


  });

});
