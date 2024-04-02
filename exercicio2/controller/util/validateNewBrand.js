import { brands } from "../../server.js"

const validateNewBrand = (newBrand) => {
  if (brands.find(brand => brand.name === newBrand.name)) {
    return false;
  }

  return true;
}

export default validateNewBrand;