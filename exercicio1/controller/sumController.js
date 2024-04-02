const sumModel = require("../model/sumModel");

let lastNumber = undefined;

const sum = (req, res) => {
    const reqNumber = parseInt(req.params.number);
    let result = {};

    if(req.method == "GET" || lastNumber === undefined)
        result = sumModel.sum(reqNumber, 10);
    else if(req.method == "PUT")
        result = sumModel.sum(reqNumber, lastNumber);

    lastNumber = reqNumber;

    return res.status(200).send(result);
}

module.exports = sum;