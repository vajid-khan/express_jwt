const jwt = require('jsonwebtoken');

const excludeRoutesFromAuth = [
    'user/profile',
]

const authMiddleware = (req, res, next) => {

    console.log(req.url);

    if (excludeRoutesFromAuth.includes(`${req.url}`)) {
        next();
    }

    try {
        const token = req.headers.authorization;
        jwt.verify(token, 'secret');
    } catch (expection) {
        res.json({
            message: 'Invalid user'
        })
    }

    next()
}

module.exports = authMiddleware