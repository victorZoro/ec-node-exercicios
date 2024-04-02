const validateReqBody = (req, res) => {
  if (!req.body.name || !req.body.plate || !req.body.brand) {
    res.statusCode = 400;
    res.send({feedback: "Missing data", statusCode: res.statusCode});
    return false;
  }
  return true;
}

export default validateReqBody;