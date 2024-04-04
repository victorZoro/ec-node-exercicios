import { validate } from "./util/validation/vehicle.validation.js";
import { createVehicle } from "../model/createVehicle.model.js";
import { connection } from "../../server.js";
import { Response, HttpStatus } from "../model/feedback.model.js";
import { retrieveVehicles } from "../model/retrieveVehicles.js";

const vehicleController = {};

const create = (req, res) => {
  const { name, model, year, color, brand, category } = req.body;

  const vehicle = {
    name,
    model,
    year,
    color,
    brand,
    category,
  };

  if (validate(vehicle).isValid != true) {
    return res.send(
      new Response(
        HttpStatus.BAD_REQUEST.code,
        HttpStatus.BAD_REQUEST.status,
        validate(vehicle).message,
        null
      )
    );
  }

  vehicle.year = Number(vehicle.year);

  return res.send(
    new Response(
      HttpStatus.CREATED.code,
      HttpStatus.CREATED.status,
      "The vehicle was sucessfully created.",
      createVehicle(connection, vehicle).vehicle
    )
  )
}

const getAll = (req, res) => {
  return res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "All vehicles retrieved from database.",
      retrieveVehicles(connection, null)
    )
  );
}

const get = (req, res) => {

}

const update = (req, res) => {

}

const remove = (req, res) => {

}

vehicleController.create = create;
vehicleController.getAll = getAll;
vehicleController.get = get;
vehicleController.update = update;
vehicleController.remove = remove;

export { vehicleController }
