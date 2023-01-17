const per ={
  n:'Lars',
  s:'Ulrich',
  b: 'Metallica',
  discs: {
    title:'Black album',
    mins: 75,
    year: 1991
  }
};

console.log(per);

const per2 = {...per};

per2.n = 'Jason';
per2.s = 'Newsted'

console.log(per2);

//https://www.udemy.com/course/react-cero-experto/learn/lecture/19629484#announcements
//https://github.com/Klerith/react-intro-javascript/blob/master/.gitignore