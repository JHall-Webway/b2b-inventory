const { OrderDetail } = require('../models');

const OrderDetailData = [
    {
        order_id: 1,
        customer_id: 1,
        product_id: 1,
        quantity: 4
    },
    {
        order_id: 2,
        customer_id: 1,
        product_id: 2,
        quantity: 7
    },
    {
        order_id: 3,
        customer_id: 1,
        product_id: 3,
        quantity: 4
    },
    {
        order_id: 4,
        customer_id: 1,
        product_id: 4,
        quantity: 5
    },
    {
        order_id: 5,
        customer_id: 1,
        product_id: 5,
        quantity: 5
    }
];

const seedOrderDetail = () => OrderDetail.bulkCreate(OrderDetailData);

module.exports = seedOrderDetail;