const bRock = (b) =>{
    return ` Band: ${b} `
}

const bRock2 = (b) => ` Band 2: ${b} `

const bRock3 = () => ` No Band ` 

console.log(bRock('Metallica'));
console.log(bRock2('Megadeth'));
console.log(bRock3());


const getBand = () => ({
    style: 'Heavy metal',
    nameB: 'Metallica'
})

const b = getBand();
console.log(b);

const getActiveBand = (b) =>({
    style: 'Heavy',
    nameB: b,
})

const activeBand = getActiveBand('Soulfly');
console.log(activeBand);


//https://www.udemy.com/course/react-cero-experto/learn/lecture/19629484#announcements
//https://github.com/Klerith/react-intro-javascript/blob/master/.gitignore