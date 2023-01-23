//import { bandas } from './data/bandas'



//write imp and select, then use tabs to move
//import { bandas } from "./data/bandas";


import { bandas } from "../data/bandas";
//write bandas and select from the list the automatic definition
//bandas

//console.log(bandas);

/* V1 
const getBandaById = (id) => bandas.find((band)=>{
        return band.id === id ? true: false;
}); */
export const getBandaById = (id) => bandas.find(band=>band.id === id)
//console.log(getBandaById(2));

const getBandaByDiscos = (discs) => bandas.filter(banda => banda.discs === discs)
//console.log(getBandaByDiscos(22));