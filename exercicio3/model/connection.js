import mysql from '@fastify/mysql';

const connect = (fastify) => {
    return fastify.register(mysql, {
        connectionString: process.env.MYSQL_CONNECTION_STRING,
    });
    // return fastify.register()
}

export default connect;