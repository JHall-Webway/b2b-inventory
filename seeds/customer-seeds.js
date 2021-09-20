const { Customer } = require('../models');

const customerData = [
    {
        customer_name: "David's (1) customer",
        user_id: 1
    },
    {
        customer_name: "(2nd) DAVID customer",
        user_id: 1
    },
    {
        customer_name: "Jame's (1) customer",
        user_id: 2
    },
    {
        customer_name: "(2nd) JAMES cusomer",
        user_id: 2
    },
    {
        customer_name: "Zach's customer",
        user_id: 3
    }
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;