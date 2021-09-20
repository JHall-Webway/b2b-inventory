const { User } = require('../models');

const userData = [{
        username: 'David',
        email: 'David@gmail.com',
        password: '1234'
    },
    {
        username: 'James',
        email: 'James@gmail.com',
        password: '1234'
    },
    {
        username: 'Zach',
        email: 'Zach@gmail.com',
        password: '1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;