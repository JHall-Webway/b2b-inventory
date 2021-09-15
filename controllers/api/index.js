const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'api success' })
})

module.exports = router;