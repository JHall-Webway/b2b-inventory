const { Product } = require('../models');

const productData = [
    {
        id: 1,
        product_name: "Baby Lamp",
        quantity: 20,
        user_id: 1
    },
    {
        id: 2,
        product_name: "RCA Adapters",
        quantity: 10,
        user_id: 2
    },
    {
        id: 3,
        product_name: "Red Wine",
        quantity: 30,
        user_id: 3
    },
    {
        id: 4,
        product_name: "Basketball",
        quantity: 10,
        user_id: 4
    },
    {
        id: 5,
        product_name: "Office Desk",
        quantity: 10,
        user_id: 5
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;