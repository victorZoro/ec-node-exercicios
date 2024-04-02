import addVehicle from "../model/addVehicle.js";
import addBrandController from "./addBrandController.js";

const addVehicleController = (res, vehicles, params) => {
    const oldLength = vehicles.length;
    vehicles = addVehicle(vehicles, params);

    if (vehicles.length > oldLength) {
        addBrandController(params.brands, params.brand);
        res.send({result: "New vehicle in the list.", vehicles: vehicles});
    } else {
        res.statusCode = 400;
        res.send({error: 400, description: "Bad Request."});
    }

    return vehicles;
}

export default addVehicleController;