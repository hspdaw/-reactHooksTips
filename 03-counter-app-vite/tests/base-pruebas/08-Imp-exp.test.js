/* 
import  bandas from "../data/bandas";

export const getBandaById = (id) => bandas.find(band=>band.id === id)
//console.log(getBandaById(2));

const getBandaByDiscos = (discs) => bandas.filter(banda => banda.discs === discs)
//console.log(getBandaByDiscos(22)); */
import bandas from "../../src/data/bandas";
import {
  getBandaByDiscos,
  getBandaById,
} from "../../src/base-pruebas/08-Imp-exp";

describe("Pruebas en 08-im-exp", () => {

  test("getBandaById de retornar una banda por id", () => {
    const id = 1;
    const banda = getBandaById(id);
    expect(banda).toEqual({ id: 1, name: "Metallica", discs: 22 });
  });

  test("getBandaByDiscos de las bandas con la misma cantidad de discos 22", () => {
    const discs = 22;
    const bandas = getBandaByDiscos(discs);
    expect(bandas.length).toBe(3);
    expect(bandas).toEqual([
      { id: 1, name: "Metallica", discs: 22 },
      { id: 2, name: "Megadeth", discs: 22 },
      { id: 5, name: "Soulfly", discs: 22 },
    ]);
    expect(bandas).toEqual(bandas.filter((banda) => banda.discs === discs));
  });

  test("getBandaByDiscos de las bandas con la misma cantidad de discos 10", () => {
    const discs = 10;
    const bandas = getBandaByDiscos(discs);
    expect(bandas.length).toBe(2);
    expect(bandas).toEqual(bandas.filter((banda) => banda.discs === discs));
  });
  
});
