import BRAND_QUERY from "../query/vehicle.query.js";

export const createBrand = (connection, params) => {
    connection.mysql.query(
        BRAND_QUERY.CREATE_BRAND, [params.name],
        function onResult(err, result) {
            return err || result
        }
    )
}
