const updateVehicle = (vehicle, params) => {
    vehicle.name = params.name;
    vehicle.plate = params.plate;
    vehicle.brand = params.brand;

    return vehicle;
}

export default updateVehicle;