const env = require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
            ca: process.env.DB_CA_CERT
        }
    }
})

module.exports = sequelize;