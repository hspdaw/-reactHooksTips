
import bandas from "../data/bandas";

export const getBandaById = (id) => bandas.find(band=>band.id === id)
//console.log(getBandaById(2));

export const getBandaByDiscos = (discs) => bandas.filter(banda => banda.discs === discs)
//console.log(getBandaByDiscos(22));