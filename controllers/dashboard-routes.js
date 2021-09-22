const router = require('express').Router();
const { User, Product, Customer, Order, OrderDetail } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        },
        include: [
            {
                model: Customer,
                attributes: ['id', 'customer_name', 'user_id']
            },
            {
                model: Product,
                attributes: ['product_name', 'quantity']
            }
        ]
    })
        .then(dbCustomerData => {
            const custList = dbCustomerData.customers.map(customer => customer.get({
                plain: true
            }));
            const productList = dbCustomerData.products.map(product => product.get({
                plain: true
            }));
            console.log(custList);
            console.log(productList);
            res.render('dashboard', {
                custList,
                productList,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/custDetail/:id', withAuth, (req, res) => {
    Customer.findByPk(req.params.id, {
        where: {
            id: req.session.user_id
        },
        attributes: ['id', 'customer_name', 'user_id'],
        include: [
            {
                model: Order,
                attributes: ['id', 'due_date', 'fulfilled', 'notes'],
                include: [{
                    model: Product
                }]
            }
        ]
    })
        .then(dbOrderData => {
            const customer_data = dbOrderData.get({ plain: true });
            // const prodDetail = customer_data.orders[0];
            // const detail = prodDetail.products[0].orderdetail;


            console.log(customer_data);
            // console.log('===============')
            // console.log(prodDetail);
            // console.log('===============')
            // console.log(detail);
            res.render('single-customer', {
                customer_data,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/createOrder', withAuth, (req, res) => {
    Customer.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(dbCustomerData => {
            const cust_list = dbCustomerData.map(customer => customer.get({ plain: true }));
            console.log(cust_list);
            let order_id = null;
            // const cust_list = dbCustomerData.get({ plain: true });
            res.render('create-order', {
                cust_list,
                order_id,
                // cust_list,
                loggedIn: true
            })
        })
})

router.get('/add-order-detail', (req,res) =>{
    Order.findAll({
        limit: 1,
        where: {
            user_id: req.session.user_id
        },
        order: [[ 'createdAt', 'DESC' ]],
        include:[
            {model:Customer,
             attributes: ['customer_name']
            }
        ]
    })
    .then(dbOrderData => {
        console.log(dbOrderData);
        const order = dbOrderData.map(customer => customer.get({plain: true}));
        console.log(order);
        res.render('add-order-detail', {
            order,
            loggedIn: true
        })
    })
})

router.get('/editInventory', (req, res) => {
    Product.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(dbProductData => {
            const product_list = dbProductData.map(product => product.get({ plain: true }));
            console.log(product_list);

            res.render('edit-inventory', {
                product_list,
                loggedIn: true
            })
        })
})

router.get('/generateInvRep', (req, res) => {
    Product.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    .then(dbProductData => {
        const product_list = dbProductData.map(product => product.get({ plain: true }));
        console.log(product_list);
    
        res.render('edit-inventory', {
            product_list,
            loggedIn: true
        })
    })
});




module.exports = router;