const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// DO we want to use bcrypt for hashing?
const bcrypt = require('bcrypt');

 
class User extends Model {
    // need to add a password check istance method to the User declarition
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        // HOOKS for password protection here
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;