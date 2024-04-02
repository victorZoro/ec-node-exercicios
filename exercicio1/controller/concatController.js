const concatModel = require ('../model/concatModel');

let names = [];

const concat = (req, res) => {
    const name = req.params.name;

    switch (req.method) {
        case 'GET':
            const word = req.params.word;
            const result = concatModel.concat(name, word);
            return res.status(200).send(result);
        case 'POST':
            names.push(name);
            return res.status(200).send(names);
        case 'DELETE':
            const index = names.indexOf(name);
            if (index > -1)
                names.splice(index, 1);
            return res.status(200).send(names);
        default:
            return res.status(405).send('Method Not Allowed');
    }
}

module.exports = concat;