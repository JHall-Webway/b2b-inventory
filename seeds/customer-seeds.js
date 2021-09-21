const { Customer } = require('../models');

const customerData = [
    {
        customer_name: "Walmart",
        user_id: 1
    },
    {
        customer_name: "Wayfair",
        user_id: 1
    },
    {
        customer_name: "Menards",
        user_id: 2
    },
    {
        customer_name: "Home Depot",
        user_id: 2
    },
    {
        customer_name: "Mom & Pop Shop",
        user_id: 3
    }
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;