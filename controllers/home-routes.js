const router = require('express').Router();
const { Customer } = require('../models');

router.get('/', (req, res) => {
    Customer.findAll({
        attributes: [
            'id',
            'customer_name'
        ]
    })
        .then(dbPostData => {
            const customers = dbPostData.map(user => user.get({ plain: true }));
            // render the homepage handlebars
            res.render('homepage', { 
                customers,
                loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// if user is logged in redirect to users account else redirect to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// if user session exists redirect to homepage else render signup
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

router.get('*', (req, res) => {
res.status(404).send('Access not allowed');
});

module.exports = router;