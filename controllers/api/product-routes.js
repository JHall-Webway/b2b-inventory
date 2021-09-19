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

// DELETE a product and any order detail containing that product
router.delete('/:id', (req,res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbProductData => {
        if (!dbProductData) {
            res.status(404).json({ message: 'No product found with this id'});
            return;
        }
        res.json(dbProductData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// CREATE many records from an excel doc (you must pass an array of product records into this route)
router.post('/excel', (req, res) => {
    const productArray = req.body;

    Product.bulkCreate(productArray)
    .then(dbProductData => {
        res.json('UPLOADED')
    })
})


module.exports = router;