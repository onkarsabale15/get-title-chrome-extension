const Sequelize = require("sequelize")
const db = require("../../db")
const User = db.define(
    "user",
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: false,
        },
        url:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
        },
        about:{
            type:Sequelize.TEXT,
            unique:false,
            allowNull:false,
        },
        bio:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
        },
        location:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
        },
        follower_count:{
            type:Sequelize.INTEGER,
            unique:false,
            allowNull:false,
        },
        connection_count:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
        }
    }
)
module.exports = User;