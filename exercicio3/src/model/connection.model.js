import fastifyMysql from '@fastify/mysql';

export const connect = (fastify) => {

    const user = process.env.MYSQL_ROOT_USER;
    const password = process.env.MYSQL_ROOT_PASSWORD;
    const port = process.env.MYSQL_PORT;

    const mysqlConnectionString = `mysql://${user}:${password}@localhost:${port}/agency_database`

    return fastify.register(fastifyMysql, {
        connectionString: mysqlConnectionString,
    });
}
