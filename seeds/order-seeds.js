const { Order } = require('../models');

const OrderData = [
    {
        "customer_id": 1,
        "user_id": 1,
        "due_date": "2021-10-15",
        "fulfilled": 0,
        "notes": "test note"
    },
    {
        "customer_id": 2,
        "user_id": 2,
        "due_date": "2021-11-20",
        "fulfilled": 0,
        "notes": "test note"
    },
    {
        "customer_id": 3,
        "user_id": 3,
        "due_date": "2021-12-25",
        "fulfilled": 0,
        "notes": "test note"
    },
    {
        "customer_id": 4,
        "user_id": 4,
        "due_date": "2021-09-25",
        "fulfilled": 0,
        "notes": "test note"
    },
    {
        "customer_id": 5,
        "user_id": 5,
        "due_date": "2021-12-23",
        "fulfilled": 0,
        "notes": "test note"
    }
];

const seedOrders = () => Order.bulkCreate(OrderData);

module.exports = seedOrders;