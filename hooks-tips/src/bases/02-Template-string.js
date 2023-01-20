//concatener strings
//concatener variables/resultados de funciones dentro de strings
//strings multi-línea

const n = 'James';
const s = 'Hetfield';

//backtick key
const fullName= ` 
${n} 
${s} 
${2 * 4}`;

console.log(fullName);

const g = 'Metallica';

function grupoRock(grupo){
  return `Grupo de rock ${grupo}`
}

console.log(`Pertenece al ${grupoRock(g)}`);

