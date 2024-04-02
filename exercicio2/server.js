import Fastify from 'fastify'
import searchVehicleController from './controller/searchVehicleController.js'
import addVehicleController from './controller/addVehicleController.js';
import deleteVehicleController from './controller/deleteVehicleController.js';
import updateVehicleController from './controller/updateVehicleController.js';
import listBrandController from './controller/listBrandController.js';


/**
 * TODO: Refactor brand addition.
 * TODO: Refactor variable's names.
 */
const fastify = Fastify({
  logger: true
})

const vehicles = [];
const brands = [];

fastify.get('/vehicle/:id', (req, res) => {
  const { id } = req.params;
  searchVehicleController(res, Number(id), vehicles);
});

fastify.get('/brands', (req, res) => {
  listBrandController(res, brands);
})

fastify.post('/vehicle', (req, res) => {
  const params = req.body;
  params.brands = brands;
  vehicles = addVehicleController(res, vehicles, params);
})

fastify.put('/vehicle/:id', (req, res) => {
  const params = req.body;
  params.id = req.params.id;
  params.brands = brands;
  vehicles = updateVehicleController(res, vehicles, params);
})

fastify.delete('/vehicle/:id', (req, res) => {
  const { id } = req.params;
  vehicles = deleteVehicleController(res, Number(id), vehicles);
})

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

