import fastifyMysql from '@fastify/mysql';

const connect = (fastify) => {

    const user = process.env.MYSQL_ROOT_USER;
    const password = process.env.MYSQL_ROOT_PASSWORD;
    const port = process.env.MYSQL_PORT;

    const mysqlConnectionString = `mysql://${user}:${password}@localhost:${port}`

    return fastify.register(fastifyMysql, {
        connectionString: mysqlConnectionString,
    });
}

export default connect;