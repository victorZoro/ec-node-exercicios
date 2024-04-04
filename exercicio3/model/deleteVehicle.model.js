import VEHICLES_QUERY from "../query/vehicle.query";

const deleteVehicle = (connection, params) => {
    connection.mysql.query(
        VEHICLES_QUERY.DELETE_VEHICLE, [params.id],
        function onResult(err, result) {
            return err || result
        }
    )
}

export default deleteVehicle;