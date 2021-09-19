const router = require('express').Router();

const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const customerRoutes = require('./customer-routes');
const orderRoutes = require('./order-routes');
const orderDetailRoutes = require('./orderDetail-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/customers', customerRoutes);
router.use('/orders', orderRoutes);
router.use('/orderDetails', orderDetailRoutes);

module.exports = router;