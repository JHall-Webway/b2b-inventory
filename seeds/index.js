// import user seeds
const seedUsers = require('./user-seeds');
// import customer seeds
const seedCustomers = require('./customer-seeds');
// import product seeds
const seedProducts = require('./product-seeds');
// import order seeds
const seedOrders = require('./order-seeds');

// import sequelize
const sequelize = require('../config/connection');

const seedAll = async () => {

    // sync database
    await sequelize.sync({ force: true });
    console.log('\n---- DATABASE SYNCED ----\n');

    // call user seeds to populate user table
    await seedUsers();
    console.log('\n---- USERS SEEDED ----\n');

    // call customer seeds to populate customer table
    await seedCustomers();
    console.log('\n---- CUSTOMERS SEEDED ----\n');

    // call product seeds to populate product table
    await seedProducts();
    console.log('\n---- PRODUCTS SEEDED ----\n');

    // call order seeds to populate order table
    await seedOrders();
    console.log('\n---- ORDERS SEEDED ----\n')

    process.exit(0);
};

seedAll();