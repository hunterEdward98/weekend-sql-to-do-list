const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
     database: 'To Do List',
     user: 'hunter',
     password: 'hunter',
     host: "localhost",
     port: 5432,
     max: 10,
     idleTimeoutMillis: 30000,
});
pool.on("connect", () => {
     console.log("Connected to Database");
});
pool.on("error", (error) => {
     console.log("There was an error in postgres", error);
});
module.exports = pool;
