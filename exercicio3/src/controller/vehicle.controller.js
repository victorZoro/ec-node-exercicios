import { validate } from "./util/validation/vehicle.validation";
import { createVehicle } from "../model/createVehicle.model";
import { connection } from "../../server";
import { Response, HttpStatus } from "../model/feedback.model.js";

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

  res.send(
    new Response(
      HttpStatus.CREATED.code,
      HttpStatus.CREATED.status,
      "Vehicle created successfully",
      createVehicle(connection, vehicle).vehicle
    )
  )
}

const getAll = (req, res) => {

}

const get = (req, res) => {

}

const update = (req, res) => {

}

const remove = (req, res) => {

}

export { create, getAll, get, update, remove }
