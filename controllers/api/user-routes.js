const router = require('express').Router();
const { User } = require('../../models');


// READ all users
router.get('/', (req, res) => {
    User.findAll(
        // update if we want to exclude the password
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE a new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;