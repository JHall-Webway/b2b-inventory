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

// router.get('/custDetail/:id', withAuth, (req,res) => {
//     Customer.findByPk(req.params.id, {
//         where: {
//             id: req.session.user_id
//         },
//         attributes: ['id', 'customer_name', 'user_id'],
//         include: [
//             {
//                 model: Order,
//                 attributes: ['id', 'due_date', 'fulfilled', 'notes'],
//                 include: [
//                     {
//                         model: Product,
//                         attributes: ['id', 'product_name']
//                     }
//                 ]
//             }
//         ]
//     })
//         .then(dbOrderData => {
//             const customer = dbOrderData.get({ plain: true });
//             const orders = dbOrderData.orders;
//             const products = dbOrderData.orders.products;
//             console.log(customer);
//             console.log('===============')
//             console.log(orders);
//             console.log('===============')
//             console.log(products);
//             res.render('single-customer', {
//                 loggedIn: true
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// })

router.get('/custDetail/:id', withAuth, (req,res) => {
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
            const prodDetail = customer_data.orders[0];
            const detail = prodDetail.products[0].orderdetail;

           
            console.log(customer_data);
            console.log('===============')
            console.log(prodDetail);
            console.log('===============')
            console.log(detail);
            res.render('single-customer', {
                customer_data,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})





module.exports = router;