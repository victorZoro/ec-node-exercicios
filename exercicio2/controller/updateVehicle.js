import findVehicle from "../model/findVehicle.js";
import updateVehicle from "../model/updateVehicle.js";
import { vehicles } from "../server.js";
import createBrandController from "./createBrand.js";
import validateFoundVehicle from "./util/validateFoundVehicle.js";
import validateReqBody from "./util/validateReqBody.js";

const updateVehicleController = (req, res) => {
  if(!validateReqBody(req, res)) return;

  const vehicle = findVehicle(req.params.id, vehicles);

  if(!validateFoundVehicle(vehicle, res)) return;

  updateVehicle(vehicle, req.body);

  createBrandController({ name: brand });

  res.statusCode = 200;
  res.send({feedback: "Updated", statusCode: res.statusCode, data: vehicle});
}

export default updateVehicleController;