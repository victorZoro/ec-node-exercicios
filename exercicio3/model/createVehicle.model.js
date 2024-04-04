import VEHICLE_QUERY from "../query/vehicle.query.js";

const createVehicle = (connection, params) => {
    connection.mysql.query(
        VEHICLE_QUERY.CREATE_VEHICLE, [params.name, params.model, params.year, params.color, params.category, params.brand],
        function onResult(err, result) {
            return err || result
        }
    )
}

export default createVehicle;