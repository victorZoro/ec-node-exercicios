const concatModel = require ('../model/concatModel');

const concat = (req, res) => {
    const name = req.params.name;
    const word = req.params.word;

    result = concatModel.concat(name, word);

    return res.status(200).send(result);
}

module.exports = concat;