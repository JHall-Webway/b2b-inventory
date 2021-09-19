const { Customer } = require('../models');

const customerData = [
    {
        "customer_name": "Mom & Pop Shop",
        "user_id": 1
    },
    {
        "customer_name": "Stinger Electronics",
        "user_id": 2
    },
    {
        "customer_name": "Blackwell's Wines",
        "user_id": 3
    },
    {
        "customer_name": "Gilbert Sport outlet",
        "user_id": 4
    },
    {
        "customer_name": "ikea",
        "user_id": 5
    }
];

const seedUsers = () => Customer.bulkCreate(customerData);

module.exports = seedUsers;