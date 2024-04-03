import { brands } from "../server.js";
import createBrand from "../model/createBrand.js";
import validateNewBrand from "./util/validateNewBrand.js";

const createBrandController = (newBrand) => {
  newBrand.name = newBrand.name.toLowerCase();

  if(!validateNewBrand(newBrand)) return;

  brands.push(createBrand({id: brands.length, name: newBrand.name}));
}

export default createBrandController;