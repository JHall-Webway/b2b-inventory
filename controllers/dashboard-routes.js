const router = require('express').Router();
const sequlize = require('../config/connection');
const { User, Product, Customer, Order, OrderDetail } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, (req, res) => {
//     Customer.findAll({
//         where: {
//             user_id: req.session.user_id
//         },
//         attributes: [
//             'id',
//             'customer_name',
//             'user_id'
//         ]
//         /*
//         include: [{
//             model: Order,
//             attributes: ['id', 'customer_id', 'user_id']
//         }]
//         */
//     })
//         .then(dbCustomerData => {
//             const customers = dbCustomerData.map(customer => customer.get({
//                 plain: true
//             }));
//             console.log(customers);
//             res.render('dashboard', {
//                 customers,
//                 loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


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
        /*
        include: [{
            model: Order,
            attributes: ['id', 'customer_id', 'user_id']
        }]
        */
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




module.exports = router;