const bandas = ['Queen', 'Korn', 'HammerFall'];

const [ QueenOfStoneAge ] = bandas;
console.log(QueenOfStoneAge);

const [ ,,HF ] = bandas;
console.log(`Last position: ${HF}`);



const retornarArr = () =>{
    return ['ABC', 123456];
}
const [letras, numeros] = retornarArr();
console.log(numeros, letras);




const usaState = (valor) => {
    return [valor, ()=> console.log('Hello mundo')]
}
const arr = usaState('Stratovarius')
console.log(arr); 
//Call the function from arr, return the second argument wich is a function
arr[1]();

const [ nombre , sayHi ] = usaState('Ramones')
console.log(nombre);
sayHi();


//https://www.udemy.com/course/react-cero-experto/learn/lecture/19629484#announcements
//https://github.com/Klerith/react-intro-javascript/blob/master/.gitignore