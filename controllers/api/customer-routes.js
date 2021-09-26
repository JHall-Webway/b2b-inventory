const router = require('express').Router();
const { Customer, Order, Product } = require('../../models');

// READ all customers
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

// CREATE new customer
router.post('/', (req, res) => {
    Customer.create({
        customer_name: req.body.customer_name,
        user_id: req.session.user_id
    })
        .then(dbProductData => res.json(dbProductData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// READ one customer and all orders/order details
router.get('/:id', (req, res) => {
    Customer.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'customer_name', 'user_id'],
        include: [
            {
                model: Order,
                attributes: ['id', 'due_date', 'fulfilled', 'notes'],
                include: [
                    {
                        model: Product,
                        attributes: ['id', 'product_name']
                    }
                ]
            }
        ]
    })
        .then(dbCustomerData => {
            if (!dbCustomerData) {
                res.status(404).json({ message: 'No customer found with this id' });
                return;
            }
            res.json(dbCustomerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// DELETE a customer and all respective orders/order_details
router.delete('/:id', (req, res) => {
    Customer.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCustomerData => {
            if (!dbCustomerData) {
                res.status(404).json({ message: 'No customer found with this id' });
                return;
            }
            res.json(dbCustomerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

// UPDATE a customer's name
router.put('/:id', (req, res) => {
    Customer.update(
        {
            customer_name: req.body.customer_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbCustomerData => {
            if (!dbCustomerData) {
                res.status(404).json({ message: 'No customer found with this id' });
                return;
            }
            res.json(dbCustomerData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


module.exports = router;