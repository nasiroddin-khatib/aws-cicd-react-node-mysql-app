const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST || 'dev-db-instance.cbakmw02gj1f.ap-south-1.rds.amazonaws.com';
const port = process.env.DB_PORT || '3306';
const user = process.env.DB_USER || 'admin';
const password = process.env.DB_PASSWORD || 'pass12345';
const database = process.env.DB_NAME || 'mysql';

const db = mysql.createConnection({
   host: host,
   port: port,
   user: user,
   password: password,
   database: database
});

module.exports = db;
