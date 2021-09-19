const { User } = require('../models');

const userData = [{
        username: 'john',
        email: 'john@test.com',
        password: '1234'

    },
    {
        username: 'jake',
        email: 'jake@test.com',
        password: '1234'
    },
    {
        username: 'joe',
        email: 'joe@test.com',
        password: '1234'
    },
    {
        username: 'darwin',
        email: 'darwin@test.com',
        password: '1234'
    },
    {
        username: 'abraham',
        email: 'abraham@test.com',
        password: '1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;