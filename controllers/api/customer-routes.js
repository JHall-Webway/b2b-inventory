const router = require('express').Router();
const { Customer } = require('../../models');

// Get all products test
router.get('/', (req, res) => {
    Customer.findAll(
        // update if we want to exclude the password
    )
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Customer.create({
        customer_name: req.body.customer_name,
        user_id: req.body.user_id
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;