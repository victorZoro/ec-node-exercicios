import Vehicle from "./vehicle.class.js";

const createVehicle = (params) => {
  return new Vehicle(params.id, params.name, params.plate, params.brand);
}

export default createVehicle;