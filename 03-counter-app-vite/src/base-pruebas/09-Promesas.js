import { getBandaById } from "./08-Imp-exp";


const getBandByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const band = getBandaById(id);
      if (band) {
        resolve(band);
      } else {
        reject("No existe esa banda");
      }
    },1000);
  });
};
export default getBandByIdAsync;
