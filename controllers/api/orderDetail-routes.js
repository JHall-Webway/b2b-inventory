const router = require('express').Router();
const { OrderDetail } = require('../../models');

// READ all order details
router.get('/', (req, res) => {
    OrderDetail.findAll(
        // update if we want to exclude the password
    )
    .then(dbOrderDetailData => res.json(dbOrderDetailData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE new order detail (add products to existing orders)
router.post('/', (req, res) => {
    OrderDetail.create({
        order_id: req.body.order_id,
        customer_id: req.body.customer_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity
    })
    .then(dbOrderDetailData => res.json(dbOrderDetailData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// DELETE a line item from an order
router.delete('/:id', (req,res) => {
    OrderDetail.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbOrderDetailData => res.json(dbOrderDetailData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;