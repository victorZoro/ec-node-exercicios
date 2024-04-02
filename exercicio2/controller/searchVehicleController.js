import searchVehicle from '../model/searchVehicle.js';

const searchVehicleController = (res, id, vehicles) => {
    const vehicle = searchVehicle(id, vehicles);

    if(vehicle === undefined)
        return {vehicle: ""};

    res.send({vehicle: vehicle});
}

export default searchVehicleController;