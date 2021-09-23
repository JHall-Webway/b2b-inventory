const router = require('express').Router();

const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', require('./api'));
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end()
});

router.get('/', (req, res) => {
    res.json({ message: 'success' })
})

module.exports = router;