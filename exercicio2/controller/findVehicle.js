import findVehicle from "../model/findVehicle.js";
import validateFoundVehicle from "./util/validateFoundVehicle.js";
import { vehicles } from "../server.js";

const findVehicleController = (req, res) => {
  const vehicle = findVehicle(Number(req.params.id), vehicles);

  if(!validateFoundVehicle(vehicle, res)) return;

  res.statusCode = 200;
  res.send({feedback: "Found", statusCode: res.statusCode, data: vehicle});
}

export default findVehicleController;