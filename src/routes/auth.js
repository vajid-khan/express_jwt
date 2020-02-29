const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {

    const expiresIn = 3000;

    const { email, password } = req.body
    //get user from logn
    const user = {
        id: 1,
        name: 'vajid',
        email,
        role: 'admin',
    }

    const secret = `secret`;

    const token = jwt.sign({
        data: user,
    }, secret, {
        expiresIn
    })

    res.json({
        token,
        expiresIn,
    });
});

module.exports = router