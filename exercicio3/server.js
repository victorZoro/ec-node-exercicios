import Fastify from "fastify";
import dotenv from "dotenv";
import { connect } from "./src/model/connection.model.js";
import { vehicleController } from "./src/controller/vehicle.controller.js";

dotenv.config();

export const fastify = Fastify({
    logger: true,
});

export const connection = connect(fastify);

fastify.get('/vehicles', (req, res) => vehicleController.getAll(req, res));

fastify.post('/vehicles', (req, res) => vehicleController.create(req, res));

try {
    await fastify.listen({ port: process.env.API_PORT });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
