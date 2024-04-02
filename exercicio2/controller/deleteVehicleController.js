import searchVehicle from '../model/searchVehicle.js';

const deleteVehicleController = (res, id, vehicles) => {
    const foundVehicle = searchVehicle(id, vehicles);

    vehicles = vehicles.filter((vehicle) => vehicle.id !== foundVehicle.id);
    res.send({result: "Vehicle deleted from the list", vehicle: foundVehicle, list: vehicles});

    return vehicles;
}

export default deleteVehicleController;