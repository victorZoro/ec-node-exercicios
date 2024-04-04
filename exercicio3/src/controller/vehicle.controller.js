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
