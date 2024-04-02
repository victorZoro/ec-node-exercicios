import addBrand from "../model/addBrand.js";

const addBrandController = (brands, name) => {
    name = name.toUpperCase();

    if(brands.find((brand) => brand.name === name) === undefined)
        addBrand(brands, name);

    return brands;
}

export default addBrandController;