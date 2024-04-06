import VEHICLES_QUERY from "../query/vehicles.query.js"

export const retrieveVehicles = async (connection, params) => {
    if (!params) {
        try {
            const [results, fields] = await connection.query(
                VEHICLES_QUERY.GET_VEHICLES
            );
            return results;
        } catch (err) {
            throw err;
        }

    }


    try {
        const [results, fields] = await connection.query(
            VEHICLES_QUERY.GET_VEHICLE_BY_ID,
            [params.id]
        );
        return results;
    } catch (err) {
        throw err;
    }
}