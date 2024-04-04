import BRANDS_QUERY from "../query/brand.query";

const findBrand = (connection, params) => {
    connection.mysql.query(
        BRANDS_QUERY.GET_BRAND_BY_ID, [params.id],
        function onResult(err, result) {
            return err || result
        }
    )
}

export default findBrand;