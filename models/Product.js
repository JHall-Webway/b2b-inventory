const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {

};

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
)

module.exports = Product;