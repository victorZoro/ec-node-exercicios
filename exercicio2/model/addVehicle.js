import Vehicle from './classes/Vehicle.js';
import addBrand from './addBrand.js';

const addVehicle = (vehicles, params) => {

    const id = vehicles.length;
    const name = params.name.toUpperCase();
    const plate = params.plate.toUpperCase();
    const brand = params.plate.toUpperCase();

    vehicles.push(
        new Vehicle(
            id,
            name,
            plate,
            brand
        )
    );

    return vehicles;
}

export default addVehicle;