import mysql from 'mysql2/promise';

export const connect = async () => {
    const connection = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        password: process.env.MYSQL_PASSWORD
    });
    
    return connection;
}
