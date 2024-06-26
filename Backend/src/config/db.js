const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

pool.connect().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

module.exports = { pool };