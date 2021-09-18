const router = require('express').Router();
const { Order, Product, OrderDetail } = require('../../models');

// Get all orders test
router.get('/', (req, res) => {
    Order.findAll(
        // update if we want to exclude the password
    )
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res) => {
    Order.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name']
            }
        ]
    })
    .then(dbOrderData => {
        if (!dbOrderData) {
            res.status(404).json({ message: 'No order found with this id'});
            return;
        }
        res.json(dbOrderData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Order.create({
        customer_id: req.body.customer_id,
        user_id: req.body.user_id,
        due_date: req.body.due_date,
        fulfilled: req.body.fulfilled,
        notes: req.body.notes
    })
    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;