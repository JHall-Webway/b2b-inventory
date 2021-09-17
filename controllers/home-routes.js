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
            res.render('homepage', { users });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;