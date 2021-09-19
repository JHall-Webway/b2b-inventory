const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: [
            'id',
            'username',
            'email',
            'password'
        ]
    })
        .then(dbPostData => {
            const users = dbPostData.map(user => user.get({ plain: true }));
            // render the homepage handlebars
            res.render('orders', { users });
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

module.exports = router;