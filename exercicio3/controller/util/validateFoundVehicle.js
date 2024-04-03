const validateFoundVehicle = (vehicle, res) => {
  if (!vehicle) {
    res.statusCode = 404;
    res.send({feedback: "Not Found", statusCode: res.statusCode});
    return false;
  }
  return true;
}

export default validateFoundVehicle;