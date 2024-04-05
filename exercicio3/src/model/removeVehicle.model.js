import VEHICLES_QUERY from "../query/vehicles.query.js";

export const removeVehicle = (connection, params) => {
    try {
        const results = connection.query(
            VEHICLES_QUERY.REMOVE_VEHICLE,
            [params.id]
        );
        return results;
    } catch (err) {
        throw err;
    }

}