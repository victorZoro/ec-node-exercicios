import VEHICLES_QUERY from "../query/vehicle.query.js"

export const retrieveVehicles = (connection, params) => {

    if(!params) {
        return connection.mysql.query(
            VEHICLES_QUERY.GET_VEHICLES,
            function onResult(err, result) {
                return err || result
            }
        )
    }

    return connection.mysql.query(
        VEHICLES_QUERY.GET_VEHICLE_BY_ID, [params.id],
        function onResult(err, result) {
            return err || result
        }
    )
}