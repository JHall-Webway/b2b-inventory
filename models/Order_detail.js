const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order_detail extends Model {

};

Order_detail.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'order',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        quantity: {
            type: DataTypes.STRING,
            
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'order_detail'
    }
);

module.exports = Order_detail;