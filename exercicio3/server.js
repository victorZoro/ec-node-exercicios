import Fastify from "fastify";
import dotenv from "dotenv";
import connect from "./model/connection.js";

dotenv.config();

export const fastify = Fastify({
    logger: true,
});

const connection = connect(fastify);

fastify.get("/", async (request, reply) => {
    connection.mysql.query(
        'SHOW DATABASES',
        (err, result) => {
            if (err) {
                reply.send(err);
                return;
            }
            reply.send(result);
        }
    );

    return reply;
});


try {
    await fastify.listen({ port: process.env.API_PORT });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
