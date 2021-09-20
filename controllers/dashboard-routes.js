const router = require('express').Router();
const sequlize = require('../config/connection');
const { User, Product, Customer, Order, OrderDetail } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Customer.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'customer_name',
            'user_id'
        ]
        /*
        include: [{
            model: Order,
            attributes: ['id', 'customer_id', 'user_id']
        }]
        */
    })
        .then(dbCustomerData => {
            const customers = dbCustomerData.map(customer => customer.get({
                plain: true
            }));
            res.render('dashboard', {
                customers,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});