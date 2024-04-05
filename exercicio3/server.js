import Fastify from "fastify";
import dotenv from "dotenv";
import { connect } from "./src/model/connection.model.js";
import { vehicleController } from "./src/controller/vehicle.controller.js";

dotenv.config();

export const fastify = Fastify({
    logger: true,
});

export const connection = await connect();

fastify.get('/vehicles', async (req, res) => vehicleController.getAll(req, res));

fastify.get('/vehicles/:id', async (req, res) => vehicleController.get(req, res));

fastify.post('/vehicles', async (req, res) => vehicleController.create(req, res));

fastify.put('/vehicles/:id', async (req, res) => vehicleController.update(req, res));

fastify.delete('/vehicles/:id', async (req, res) => vehicleController.remove(req, res));

try {
    await fastify.listen({ port: process.env.API_PORT });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
