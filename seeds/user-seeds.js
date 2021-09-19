const { User } = require('../models');

const userData = [{
        username: 'Mom&PopShop',
        email: 'MomPopShop@test.com',
        password: '1234'
    },
    {
        username: 'stingerShop',
        email: 'stingerShop@test.com',
        password: '1234'
    },
    {
        username: 'blackwellWines',
        email: 'blackwellWines@test.com',
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