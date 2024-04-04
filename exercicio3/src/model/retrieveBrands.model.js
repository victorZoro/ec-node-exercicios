import BRANDS_QUERY from "../query/brand.query";

export const retrieveBrands = (connection, params) => {
    if(!params) {
        return connection.mysql.query(
            BRANDS_QUERY.GET_BRANDS,
            function onResult(err, result) {
                return
            }
        )
    }
    
    return connection.mysql.query(
        BRANDS_QUERY.GET_BRAND_BY_ID, [params.id],
        function onResult(err, result) {
            return err || result
        }
    )
}