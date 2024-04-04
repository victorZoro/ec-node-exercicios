import VEHICLES_QUERY from "../query/vehicle.query";

export const removeVehicle = (connection, params) => {
    connection.mysql.query(
        VEHICLES_QUERY.REMOVE_VEHICLE, [params.id],
        function onResult(err, result) {
            return err || result
        }
    )
}