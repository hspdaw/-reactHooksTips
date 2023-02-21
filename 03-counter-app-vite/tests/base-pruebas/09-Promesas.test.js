/* import { getBandaById } from "./bases/08_Imp-exp";

const getBandByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const band = getBandaById(id);
      if (band) {
        resolve(band);
      } else {
        reject("No existe esa banda");
      }
    }, 2000);
  });
};

 */

import getBandByIdAsync from "../../src/base-pruebas/09-Promesas";

describe(`Pruebas en 09-promesas`, ()=>{

  test('getBandByIdAsync debe retornar una banda', (done) =>{
    const id = 1;
    getBandByIdAsync(id).then(banda => {
      expect(banda).toEqual({ id: 1, name: "Metallica", discs: 22 });

      done();
    });
  })

  test('getBandByIdAsync debe obtener un error si existe la banada', (done) =>{
    const id = 100;
    getBandByIdAsync(id).catch(error => {
      //expect(banda).toEqual({ id: 1, name: "Metallica", discs: 22 });
      expect(error).toBe(`No existe esa banda`);
      done();
    });
  })

})