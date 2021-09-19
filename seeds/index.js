// import user seeds
const seedUsers = require('./user-seeds');
// import customer seeds
const customerSeeds = require('./customer-seeds');

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
    await customerSeeds();
    console.log('\n---- CUSTOMER SEEDED ----\n');

    process.exit(0);
};

seedAll();