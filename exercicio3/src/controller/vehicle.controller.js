import { validate } from "./util/validation/vehicle.validation.js";
import { createVehicle } from "../model/createVehicle.model.js";
import { connection } from "../../server.js";
import { Response, HttpStatus } from "../model/feedback.model.js";
import { retrieveVehicles } from "../model/retrieveVehicles.model.js";

const vehicleController = {};

const create = async (req, res) => {
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

const getAll = async (req, res) => {
  
  let message = "";
  let output = {};
  let statusCode = 0;
  let status = "";

  try {
    output = await retrieveVehicles(connection, null);
    statusCode = HttpStatus.OK.code;
    status = HttpStatus.OK.status;
    message = "All vehicles retrieved from database.";
  } catch (err) {
    output = err;
    statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
    status = HttpStatus.INTERNAL_SERVER_ERROR.status;
    message = "There was an error retrieving the vehicles from the database";
  }

  return res.send(
    new Response(
      statusCode,
      status,
      message,
      output
    )
  );
}

const get = async (req, res) => {

}

const update = async (req, res) => {

}

const remove = async (req, res) => {

}

vehicleController.create = create;
vehicleController.getAll = getAll;
vehicleController.get = get;
vehicleController.update = update;
vehicleController.remove = remove;

export { vehicleController }
