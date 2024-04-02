import updateVehicle from "../model/updateVehicle.js";

const updateVehicleController = (res, vehicles, params) => {
    
    try {
        vehicles[params.id] = updateVehicle(vehicles[params.id], params);
        addBrandController(params.brands, params.brand);
        res.send({result: `Vehicle with id ${params.id} was changed to ${params}`, vehicles: vehicles});
    } catch (err) {
        res.statusCode = 400;
        res.send({result: `The id ${params.id} is invalid.`});
    }

    return vehicles;
}

export default updateVehicleController;