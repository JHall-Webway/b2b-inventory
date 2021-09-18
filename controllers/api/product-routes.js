const router = require('express').Router();
const { Product } = require('../../models');

// READ all products
router.get('/', (req, res) => {
    Product.findAll(
        // update if we want to exclude the password
    )
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE new product
router.post('/', (req, res) => {
    Product.create({
        product_name: req.body.product_name,
        quantity: req.body.quantity,
        user_id: req.body.user_id
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;