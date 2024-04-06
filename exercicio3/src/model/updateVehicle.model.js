import VEHICLES_QUERY from "../query/vehicles.query.js";

export const updateVehicle = (connection, params) => {
    try {
        const results = connection.query(
            VEHICLES_QUERY.UPDATE_VEHICLE,
            [
                params.name,
                params.model,
                params.year,
                params.color,
                params.brand,
                params.category,
                params.id,
            ]
        );
        return results;
    } catch (err) {
        throw err;
    }
};
