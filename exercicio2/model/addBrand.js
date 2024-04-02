import Brand from './classes/Brand.js';

const addBrand = (brands, name) => {
    brands.push(
        new Brand(
            brands.length,
            name
        )
    );

    return brands;
}

export default addBrand;