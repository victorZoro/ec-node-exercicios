import Fastify from "fastify";
import dotenv from "dotenv";
import { connect, useDefaultDatabase } from "./model/connection.model.js";
import CATEGORY_QUERY from "./query/category.query.js";

dotenv.config();

export const fastify = Fastify({
    logger: true,
});

const connection = connect(fastify);


// fastify.get("/:id", async (request, reply) => {

//     connection.mysql.query(
//         CATEGORY_QUERY.GET_CATEGORY_BY_ID, [request.params.id],
//         function onResult(err, result) {
//             reply.send(err || result)
//         }
//     );

//     return reply;
// });


try {
    await fastify.listen({ port: process.env.API_PORT });
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
