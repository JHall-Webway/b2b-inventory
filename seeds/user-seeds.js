const { User } = require('../models');

const userData = [{
        username: 'Mom&PopShop',
        email: 'Mom&PopShop@test.com',
        password: '1234'

    },
    {
        username: 'stingerShop',
        email: 'stingerShop@test.com',
        password: '1234'
    },
    {
        username: 'blackwellShop',
        email: 'blackWell@test.com',
        password: '1234'
    },
    {
        username: 'gilbertSportOutlet',
        email: 'gilbertSports@test.com',
        password: '1234'
    },
    {
        username: 'ikea',
        email: 'ikea@test.com',
        password: '1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;