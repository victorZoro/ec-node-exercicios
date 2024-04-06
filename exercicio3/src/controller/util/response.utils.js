import { Response } from '../../model/feedback.model.js';

const sendResponse = (res, params) => {
    return res.status(params.statusCode).send(
        new Response(
            params.statusCode,
            params.status,
            params.message,
            params.output
        )
    );
};

export { sendResponse }