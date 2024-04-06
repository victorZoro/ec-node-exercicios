import Fastify from "fastify";
import dotenv from "dotenv";
import {connect} from "./src/model/connection.model.js";
import {vehicleController} from "./src/controller/vehicle.controller.js";
import {brandController} from "./src/controller/brand.controller.js";

dotenv.config();

/*
TODO: Implement automation for creating new brands.
    Requisites:
        - A new brand must be created whenever a vehicle is added or updated in the database.
        - Whenever a new vehicle is added or updated, the brand must be checked in the database.
            - If the brand already exists: DO NOTHING!
            - If the brand does not exist: create a new brand.
        - The brand name must be unique.
        - The brand routes must be deleted after the implementation of the automation. They will not be necessary anymore.
*/

export const fastify = Fastify({
    logger: true,
});

export const connection = await connect();

fastify.get('/vehicles', async (req, res) => vehicleController.getAll(req, res));

fastify.get('/vehicles/:id', async (req, res) => vehicleController.get(req, res));

fastify.post('/vehicles', async (req, res) => vehicleController.create(req, res));

fastify.put('/vehicles/:id', async (req, res) => vehicleController.update(req, res));

fastify.delete('/vehicles/:id', async (req, res) => vehicleController.remove(req, res));

// Brand Routes: must be deleted after the automation is implemented.
fastify.get('/brands', async (req, res) => brandController.getAll(req, res));
fastify.get('/brands/:id', async (req, res) => brandController.get(req, res));
fastify.post('/brands', async (req, res) => brandController.create(req, res));

try {
    await fastify.listen({port: process.env.API_PORT});
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
