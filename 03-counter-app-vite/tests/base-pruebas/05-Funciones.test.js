/* const getBand = () => ({
    style: 'Heavy metal',
    nameB: 'Metallica'
})

const b = getBand();

const getActiveBand = (b) =>({
    style: 'Heavy',
    nameB: b,
})
 */

import { getActiveBand, getBand } from "../../src/base-pruebas/05-Funciones";

describe("Pruebas en 05-Funciones", () => {
  test("getBand debe retornar un objeto ", () => {
    const testBand = {
      style: "Heavy metal",
      nameB: "Metallica",
    };
    const band = getBand();

    expect(testBand).toEqual(band);
  });

  test("getActiveBand debe retornar un objeto", () => {
    const name = "Metallica";
    const band = getActiveBand(name);
    expect(band).toStrictEqual({
        style: "Heavy metal",
        nameB: name,
    });
  });
});
