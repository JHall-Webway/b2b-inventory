const { OrderDetail } = require('../models');

const OrderDetailData = [
    {
        order_id: 1,
        customer_id: 1,
        product_id: 1,
        quantity: 5
    },
    {
        order_id: 1,
        customer_id: 1,
        product_id: 2,
        quantity: 10
    },
    {
        order_id: 2,
        customer_id: 2,
        product_id: 2,
        quantity: 20
    },
    {
        order_id: 3,
        customer_id: 3,
        product_id: 3,
        quantity: 1
    },
    {
        order_id: 3,
        customer_id: 3,
        product_id: 4,
        quantity: 2
    },
    {
        order_id: 4,
        customer_id: 4,
        product_id: 3,
        quantity: 55
    },
    {
        order_id: 4,
        customer_id: 4,
        product_id: 4,
        quantity: 55
    },
    {
        order_id: 5,
        customer_id: 5,
        product_id: 5,
        quantity: 2000000
    },
    {
        order_id: 6,
        customer_id: 1,
        product_id: 1,
        quantity: 50
    },
];

const seedOrderDetail = () => OrderDetail.bulkCreate(OrderDetailData);

module.exports = seedOrderDetail;