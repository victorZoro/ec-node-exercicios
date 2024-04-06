import VEHICLES_QUERY from "../query/vehicles.query.js";

export const createVehicle = (connection, params) => {
    try {
        const results = connection.query(
            VEHICLES_QUERY.CREATE_VEHICLE,
            [params.name, params.model, params.year,
            params.color, params.brand, params.category]
        );
        return results;
    } catch (err) {
        throw err;
    }
}