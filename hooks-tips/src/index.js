// Desestructuración
// Asignación Desestructurante

const band = {
    n: 'Soulfly',
    age: 24,
    style: 'Heavy'
};

const { n , style} = band;
console.log(n);
console.log(style);

//Otro ejemplo

const usarContexto = ({clave, nombre, edad, rango = 'Warlock'}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        magias:{
            fuego: 'activo',
            trueno: 'desactivado'
        }
    }
}

const {nombreClave, anios, magias: {fuego, trueno}} = usarContexto(band);
console.log(nombreClave, anios);
console.log(fuego, trueno);


//https://www.udemy.com/course/react-cero-experto/learn/lecture/19629484#announcements
//https://github.com/Klerith/react-intro-javascript/blob/master/.gitignore