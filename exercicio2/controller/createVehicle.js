import { vehicles } from "../server.js";
import createVehicle from "../model/createVehicle.js";
import validateReqBody from "./util/validateReqBody.js";
import validateFoundVehicle from "./util/validateFoundVehicle.js";
import createBrandController from "./createBrand.js";

const createVehicleController = (req, res) => {

  if(!validateReqBody(req, res)) return;

  const id = vehicles.length;
  const { name, plate, brand } = req.body;
  const vehicle = createVehicle({ id, name, plate, brand });
  vehicles.push(vehicle);

  if(!validateFoundVehicle(vehicle, res)) return;

  createBrandController({ name: brand });

  res.statusCode = 200;
  res.send({feedback: "Created", statusCode: res.statusCode, data: vehicle});
}

export default createVehicleController;