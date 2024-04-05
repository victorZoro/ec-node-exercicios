import BRANDS_QUERY from "../query/brand.query.js";

export const retrieveBrands = async (connection, params) => {
    if (!params) {
        try {
            const [results, fields] = await connection.query(
                BRANDS_QUERY.GET_BRANDS
            );
            return results;
        } catch (err) {
            throw err;
        }

    }

    try {
        const [results, fields] = await connection.query(
            BRANDS_QUERY.GET_BRAND_BY_ID,
            [params.id]
        );
        return results;
    } catch (err) {
        throw err;
    }
}