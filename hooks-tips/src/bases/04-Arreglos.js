const arr = ['a','b','c','d'];
arr.push('e');
arr.push('f');
arr.push('g');
console.log(arr);

let arr2 = [...arr, 'h'];

console.log(arr2);

const arr3 = arr2.map((letra) => `${letra} arr2`)
console.log(arr3);


//https://www.udemy.com/course/react-cero-experto/learn/lecture/19629484#announcements
//https://github.com/Klerith/react-intro-javascript