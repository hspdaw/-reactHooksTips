
import { retornarArr } from "../../src/base-pruebas/07-Desestructuracion-arr"

describe('Pruebas en 07-Desestructuracion-arr', () => { 
   test('debe retornar un string y un número', () =>{
    const retorno = retornarArr();
    console.log(retorno);
   }) 
 })