import {validate} from "./util/validation/vehicle.validation.js";
import {createVehicle} from "../model/createVehicle.model.js";
import {connection} from "../../server.js";
import {HttpStatus, Response} from "../model/feedback.model.js";
import {retrieveVehicles} from "../model/retrieveVehicles.model.js";
import {updateVehicle} from "../model/updateVehicle.model.js";
import {removeVehicle} from "../model/removeVehicle.model.js";
import {sendResponse} from "./util/response.utils.js";

export const vehicleController = {};

let message = "";
let output = {};
let statusCode = 0;
let status = "";


vehicleController.create = async (req, res) => {
    const {name, model, year, color, brand, category} = req.body;

    const params = {
        name,
        model,
        year,
        color,
        brand,
        category,
    };

    if (validate(params).isValid !== true) {
        return sendResponse(res, {
                statusCode: HttpStatus.BAD_REQUEST.code,
                status: HttpStatus.BAD_REQUEST.status,
                message: `The id field is required. Didn't you mean https://{process.env.HOST}/vehicles ?`,
                output: null
            }
        );
    }

    try {
        output = await createVehicle(connection, params);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The vehicle was successfully added to database."
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while adding vehicle to database."
    }

    return sendResponse(res, {statusCode, status, message, output});
}

vehicleController.getAll = async (req, res) => {

    try {
        output = await retrieveVehicles(connection, null);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "All vehicles retrieved from database.";
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while retrieving the vehicles from the database";
    }

    return sendResponse(res, {statusCode, status, message, output});
}

vehicleController.get = async (req, res) => {

    const params = req.params;

    if (!params.id) {
        return sendResponse(res, {
                statusCode: HttpStatus.BAD_REQUEST.code,
                status: HttpStatus.BAD_REQUEST.status,
                message: `The id field is required. Didn't you mean https://{process.env.HOST}/vehicles ?`,
                output: null
            }
        );
    }

    try {
        output = await retrieveVehicles(connection, params);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The vehicle was successfully retrieved from database.";
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while retrieving the vehicle from the database";
    }

    return sendResponse(res, {statusCode, status, message, output});
}

vehicleController.update = async (req, res) => {
    const {name, model, year, color, brand, category} = req.body;
    const id = req.params.id;
    const params = {
        id,
        name,
        model,
        year,
        color,
        brand,
        category,
    };

    if (validate(params).isValid !== true) {
        return sendResponse(res, {
                statusCode: HttpStatus.BAD_REQUEST.code,
                status: HttpStatus.BAD_REQUEST.status,
                message: `The id field is required. Didn't you mean https://{process.env.HOST}/vehicles ?`,
                output: null
            }
        );
    }

    try {
        output = await updateVehicle(connection, params);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The vehicle was successfully updated in database."
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while updating vehicle in database."
    }

    return sendResponse(res, {statusCode, status, message, output});
};

vehicleController.remove = async (req, res) => {

    const params = req.params;

    if (!params.id) {
        new Response(
            HttpStatus.BAD_REQUEST.code,
            HttpStatus.BAD_REQUEST.status,
            "The id field is required.",
            null
        )
    }

    try {
        output = await removeVehicle(connection, params);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The vehicle was successfully removed from database.";
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while removing the vehicle from the database";
    }

    return sendResponse(res, {statusCode, status, message, output});

}