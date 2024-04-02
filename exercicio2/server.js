import Fastify from "fastify";
import createVehicleController from "./controller/createVehicle.js";
import findVehicleController from "./controller/findVehicle.js";
import updateVehicleController from "./controller/updateVehicle.js";
import deleteVehicleController from "./controller/deleteVehicle.js";

export let vehicles = [];
export let brands = [];

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (req, res) => {
  return { feedback: "Welcome to the vehicle API" };
});

fastify.get("/brands", async (req, res) => {
  if (brands.length === 0) {
    res.statusCode = 404;
    return { feedback: "No brands found", statusCode: res.statusCode };
  }
  return brands;
});

fastify.get("/vehicles", async (req, res) => {
  if (vehicles.length === 0) {
    res.statusCode = 404;
    return {
      feedback: "No vehicles found",
      statusCode: res.statusCode,
      vehicles_type: typeof(vehicles),
      brands_type: typeof(brands),
      vehicleIsArray: Array.isArray(vehicles),
      brandsIsArray: Array.isArray(brands),
    };
  }
  return vehicles;
});

fastify.get("/vehicles/:id", async (req, res) =>
  findVehicleController(req, res)
);
fastify.post("/vehicles", async (req, res) =>
  createVehicleController(req, res)
);
fastify.put("/vehicles/:id", async (req, res) =>
  updateVehicleController(req, res)
);
fastify.delete("/vehicles/:id", async (req, res) =>
  deleteVehicleController(req, res)
);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
