const router = require('express').Router();

const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const customerRoutes = require('./customer-routes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/customers', customerRoutes);

module.exports = router;