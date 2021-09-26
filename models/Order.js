const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model { };

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        due_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        fulfilled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'order'
    }
)

module.exports = Order;