const { OrderDetail } = require('../models');

const OrderDetailData = [
    {
        "order_id": 1,
        "customer_id": 1,
        "product_id": 1,
        "quantity": 4

    },
    {
        "order_id": 1,
        "customer_id": 1,
        "product_id": 1,
        "quantity": 4

    },
    {
        "order_id": 1,
        "customer_id": 1,
        "product_id": 1,
        "quantity": 4

    },
    {
        "order_id": 1,
        "customer_id": 1,
        "product_id": 1,
        "quantity": 4

    },
    {
        "order_id": 1,
        "customer_id": 1,
        "product_id": 1,
        "quantity": 4

    }
];

const seedOrderDetail = () => OrderDetail.bulkCreate(OrderDetailData);

module.exports = seedOrderDetail;