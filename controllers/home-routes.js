const router = require('express').Router();
const { Customer, Product } = require('../models');

const expresFileUpload = require('express-fileupload');
const xlReader = require('../utils/excelReader');
router.use(expresFileUpload());


router.get('/', (req, res) => {
    Customer.findAll({
        attributes: [
            'id',
            'customer_name'
        ]
    })
        .then(dbPostData => {
            const customers = dbPostData.map(user => user.get({ plain: true }));
            // render the homepage handlebars
            res.render('homepage', {
                customers,
                loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// if user is logged in redirect to users account else redirect to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// if user session exists redirect to homepage else render signup
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// EXCEL ROUTE-------------------------------------------
router.post('/upload', (req, res) => {
    if(!req.files || Object.keys(req.files).length == 0) {
        return res.status(400).send("No files were uploaded");
    }
    // req.files.NAME OF INPUT TAG
    let uploadedFile = req.files.myFile;

    let readyData = xlReader(uploadedFile.data);
    console.log(readyData);
    readyData.forEach(data => {
        data.user_id = req.session.user_id
    })
    console.log(readyData);

    Product.bulkCreate(readyData)
    .then(dbProductData => {
        // res.render('dashboard', {
        //     loggedIn: req.session.loggedIn
        // })
        res.redirect('/dashboard');
    })

});

function sendData(readyData) {
    router.post('/products/excel', (req, res) => {
        Product.bulkCreate(readyData, {
            where: {
                user_id: req.session.user_id
            }
        })
        .then(dbProductData => {
            res.json('UPLOADED')
        })
    })
}






module.exports = router;