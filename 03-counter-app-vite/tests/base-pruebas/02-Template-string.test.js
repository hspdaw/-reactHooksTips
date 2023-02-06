//https://jestjs.io/docs/getting-started
//npm install --save-dev jest
//config script en package.json  "test": "jest --watchAll"
//npm run jest
//npm install --save-dev babel-jest @babel/core @babel/preset-env
//add y config babel

/* en caso de ver el error "
You appear to be using a native ECMAScript module configuration file, 
which is only supported when running Babel asynchronously."
Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs */


import { grupoRock } from "../../src/base-pruebas/02-Template-string";

describe("Pruebas en 02-Template-string", () => {
  test('grupoRock debe retornar "Metallica"', () => {
    const grupo = "Metallica";
    const message = grupoRock(grupo);
    expect(message).toBe(`Grupo de rock ${ grupo}`)
  });
});
