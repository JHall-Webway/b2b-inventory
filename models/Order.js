const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {

};

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        due_date: {
            type: DataTypes.DATE
        },
        fufilled: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Order;