const { Order } = require('../models');

const OrderData = [
    {
        customer_id: 1,
        user_id: 1,
        due_date: "2022-01-15",
        fulfilled: 0,
        notes: "David's 1st customer's order"
    },
    {
        customer_id: 2,
        user_id: 1,
        due_date: "2022-02-20",
        fulfilled: 0,
        notes: "David's 2nd customer's order"
    },
    {
        customer_id: 3,
        user_id: 2,
        due_date: "2021-12-25",
        fulfilled: 0,
        notes: "Jame's 1st customer's order"
    },
    {
        customer_id: 4,
        user_id: 2,
        due_date: "2021-12-26",
        fulfilled: 0,
        notes: "Jame's 2nd customer's order"
    },
    {
        customer_id: 5,
        user_id: 3,
        due_date: "2021-10-10",
        fulfilled: 0,
        notes: "Zach's only customer's order"
    }
];

const seedOrders = () => Order.bulkCreate(OrderData);

module.exports = seedOrders;