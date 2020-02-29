const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/profile', (req, res) => {

    const token = req.headers.authorization;
    const user = jwt.verify(token, 'secret');

    res.json({
        user
    })
});

module.exports = router;