const mongoose = require("mongoose");

const userDB = mongoose.createConnection(process.env.USER_DB_URL);
const queryDB = mongoose.createConnection(process.env.QUERY_DB_URL);

module.exports = { userDB, queryDB };