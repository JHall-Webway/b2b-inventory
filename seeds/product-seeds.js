const { Product } = require('../models');

const productData = [
    {
        id: 1,
        product_name: "CBD oil",
        quantity: 20,
        user_id: 1
    },
    {
        id: 2,
        product_name: "CBD lotion",
        quantity: 10,
        user_id: 1
    },
    {
        id: 3,
        product_name: "Hatchet",
        quantity: 30,
        user_id: 2
    },
    {
        id: 4,
        product_name: "First aid kits",
        quantity: 10,
        user_id: 2
    },
    {
        id: 5,
        product_name: "Bootleg movies",
        quantity: 10,
        user_id: 3
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;