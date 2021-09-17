const Customer = require('./Customer');
const Order = require('./Order');
const Product = require('./Product');
const User = require('./User');

// User.hasMany(Customer, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Order, {
//     foreignKey: 'user_id'
// });

// Customer.hasMany(Order, {
//     foreignKey: 'customer_id'
// });

module.exports = { Customer, Order, Product, User };