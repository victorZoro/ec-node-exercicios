const createBrand = (params) => {
  const brand = {
    id: params.id,
    name: params.name
  }

  return brand;
}

export default createBrand;