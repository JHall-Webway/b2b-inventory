const router = require('express').Router();
const { Order, Product, OrderDetail } = require('../../models');

// READ all orders
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

// READ one order and all order details
router.get('/:id', (req, res) => {
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
                res.status(404).json({ message: 'No order found with this id' });
                return;
            }
            res.json(dbOrderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// CREATE new order
router.post('/', (req, res) => {
    Order.create({
        customer_id: req.body.customer_id,
        user_id: req.session.user_id,
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

// DELETE order and all associated order details
router.delete('/:id', (req, res) => {
    Order.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbOrderData => {
            if (!dbOrderData) {
                res.status(404).json({ message: 'No order found with this id' });
                return;
            }
            res.json(dbOrderData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;