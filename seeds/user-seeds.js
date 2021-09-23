const { User } = require('../models');


const user1 = {
    username: 'David',
    email: 'David@gmail.com',
    password: '1234'
}

const user2 ={
    username: 'James',
    email: 'James@gmail.com',
    password: '1234'
}

const user3 ={
    username: 'Zach',
    email: 'Zach@gmail.com',
    password: '1234'
}



const seedUsers = () => User.create(user1).then(User.create(user2)).then(User.create(user3));




module.exports = seedUsers;