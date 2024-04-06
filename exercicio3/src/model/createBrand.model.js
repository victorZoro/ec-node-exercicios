import BRANDS_QUERY from "../query/brands.query.js";

export const createBrand = (connection, params) => {
    try {
        const results = connection.query(
            BRANDS_QUERY.CREATE_BRAND,
            [params.name]
        );
        return results;
    } catch (err) {
        throw err;
    }
}
