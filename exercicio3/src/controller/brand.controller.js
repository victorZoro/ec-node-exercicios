import {sendResponse} from "./util/response.utils.js";
import {HttpStatus} from "../model/feedback.model.js";
import {connection} from "../../server.js";
import {createBrand} from "../model/createBrand.model.js";
import {validate} from "./util/validation/brand.validation.js";
import {retrieveBrands} from "../model/retrieveBrands.model.js";

export const brandController = {};

let message = "";
let status = "";
let statusCode = 0;
let output = {};

brandController.create = async (req, res) => {
    const {name} = req.body;

    const params = {
        name
    };

    if (validate(params).isValid !== true) {
        return sendResponse(res, {
                statusCode: HttpStatus.BAD_REQUEST.code,
                status: HttpStatus.BAD_REQUEST.status,
                message: `The name field is required. Didn't you mean https://{process.env.HOST}/brands ?`,
                output: null
            }
        );
    }

    try {
        output = await createBrand(connection, params);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The brand was successfully added to database."
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while adding brand to database."
    }

    return sendResponse(res, {statusCode, status, message, output});
}

brandController.getAll = async (req, res) => {
    try {
        output = await retrieveBrands(connection, null);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The brands were successfully retrieved from database."
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while retrieving brands from database."
    }

    return sendResponse(res, {statusCode, status, message, output});
}

brandController.get = async (req, res) => {
    const {id} = req.params;

    const params = {
        id
    };

    if (validate(params).isValid !== true) {
        return sendResponse(res, {
                statusCode: HttpStatus.BAD_REQUEST.code,
                status: HttpStatus.BAD_REQUEST.status,
                message: `The id field is required. Didn't you mean https://{process.env.HOST}/brands ?`,
                output: null
            }
        );
    }

    try {
        output = await retrieveBrands(connection, params);
        statusCode = HttpStatus.OK.code;
        status = HttpStatus.OK.status;
        message = "The brand was successfully retrieved from database."
    } catch (err) {
        output = err;
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR.code;
        status = HttpStatus.INTERNAL_SERVER_ERROR.status;
        message = "There was an unexpected error while retrieving brand from database."
    }

    return sendResponse(res, {statusCode, status, message, output});
}