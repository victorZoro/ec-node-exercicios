import VEHICLES_QUERY from "../query/vehicle.query";

const updateVehicle = (connection, params) => {
    connection.mysql.query(
        VEHICLES_QUERY.UPDATE_VEHICLE, [params.name, params.model, params.year, params.color, params.category, params.brand],
        function onResult(err, result) {
            return err || result
        }
    )
}

export default updateVehicle;