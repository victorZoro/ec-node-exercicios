const findVehicle = (id, vehicles) => {
    return vehicles.find((vehicle) => vehicle.id === id);
}

export default findVehicle;