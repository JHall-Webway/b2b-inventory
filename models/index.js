const Customer = require('./Customer');
const Order = require('./Order');
const Product = require('./Product');
const User = require('./User');
const OrderDetail = require('./Order-detail');

// USER associations
User.hasMany(Customer, {
    foreignKey: 'user_id'
});

Customer.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Product, {
    foreignKey: 'user_id'
});

Product.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Order, {
    foreignKey: 'user_id'
});

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

// CUSTOMER associations

Customer.hasMany(Order, {
    foreignKey: 'customer_id'
});

Order.belongsTo(Customer, {
    foreignKey: 'customer_id'
});


// ORDER DETAIL

Order.belongsTo(User, {
    foreignKey: 'user_id'
});

Order.belongsToMany(Product, {
    through: OrderDetail,
    foreignKey: 'order_id'
});

Product.belongsToMany(Order, {
    through: OrderDetail,
    foreignKey: 'product_id'
});

module.exports = { Customer, Order, Product, User, OrderDetail };
