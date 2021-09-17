const router = require('express').Router();
const { User } = require('../../models');


// Get all users test
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

// Create a new user test
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;