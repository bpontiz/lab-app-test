const { Sequelize, DataTypes } = require("sequelize");
const dotenv  = require("dotenv");

dotenv.config();

let sequelize = new Sequelize(`${process.env.MYSQL_DATABASE}`, `${process.env.MYSQL_USER}`, `${process.env.MYSQL_PASSWORD}`, {
    host: `${process.env.MYSQL_HOST}`,
    port: `${process.env.MYSQL_PORT}`,
    dialect: 'mysql'
});

const User = sequelize.define(
    'User', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'doomyName',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'doomyEmail',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = User;