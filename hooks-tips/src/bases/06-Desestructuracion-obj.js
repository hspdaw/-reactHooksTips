// Desestructuración
// Asignación Desestructurante

const band = {
    nombre: 'Soulfly',
    edad: 24,
    raza: 'Orco'
};

const { nombre , raza} = band;
console.log(nombre);
console.log(raza);

//Ejemplos de uso
const usaContext = ({raza, nombre, edad, rango = 'Warlock'}) =>{
    return{
        nombreRaza: raza,
        anios: edad,
        magias:{
            fuego: 'activo',
            trueno: 'desactivado'
        }
    }
}

const test = usaContext(band);
console.log(test);

const {nombreRaza:nombreClave, anios, magias: {fuego, trueno}} = usaContext(band);
console.log(nombreClave, anios);
console.log(fuego, trueno);


//https://www.udemy.com/course/react-cero-experto/learn/lecture/19629484#announcements
//https://github.com/Klerith/react-intro-javascript/blob/master/.gitignore