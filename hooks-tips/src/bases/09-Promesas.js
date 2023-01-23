import { getBandaById } from "./bases/08_Imp-exp";

/*
 * Por naturaleza son asíncronas,
 * primero se va a ejecutar todo el código que es síncrono/sequencial
 * luego se ejecutan los resultados de las promesas
 **/

/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const band = getBandaById(51);
        resolve(band);

    },2000);
});

promesa.then((data)=>{
    console.log('Then de la promesa ', data);
}).catch(err => console.warn(err)) */



const getBandByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const band = getBandaById(id);
      if (band) {
        resolve(band);
      } else {
        reject("No existe esa banda");
      }
    }, 2000);
  });
};

getBandByIdAsync(1)
  //.then((band) => console.log(band))
  //.catch((err) => console.warn(err))
  .then(console.log)
  .catch(console.warn)
