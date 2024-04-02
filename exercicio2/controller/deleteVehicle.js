import findVehicle from "../model/findVehicle.js";
import validateFoundVehicle from "./util/validateFoundVehicle.js";
import { vehicles } from "../server.js";

const deleteVehicleController = (req, res) => {
  let vehicle = vehicles.findIndex(v => v.id === Number(req.params.id));

  if(!validateFoundVehicle(vehicle, res)) return;

  vehicles.splice(vehicle, 1);

  res.statusCode = 200;
  res.send({feedback: "Deleted", statusCode: res.statusCode, data: vehicle});
}

export default deleteVehicleController;