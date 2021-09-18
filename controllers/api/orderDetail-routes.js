const router = require('express').Router();
const { OrderDetail } = require('../../models');

// Get all orders test
router.get('/', (req, res) => {
    OrderDetail.findAll(
        // update if we want to exclude the password
    )
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    OrderDetail.create({
        order_id: req.body.order_id,
        customer_id: req.body.customer_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;