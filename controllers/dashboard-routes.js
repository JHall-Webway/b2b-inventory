const router = require('express').Router();
const sequlize = require('../config/connection');
const { User, Product, Customer, Order, OrderDetail } = require('../models');
const withAuth = require('../utils/auth');