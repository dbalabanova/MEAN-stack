const jwt = require('./jwt');
const models = require('../models');
const appConfig = require('../app-config')

function auth() {
    return function (req, res, next) {
        const token = req.cookies[appConfig.authCookieName];
        jwt.verifyToken(token)
        .then(({ id }) => models.User.findById(id))
        .then( user => {
            if (!user) { return Promise.reject() }
            req.user = user;
            next();
        }).catch(() => {
            res.status(401).send('Unauthorized')
        })
    }
}
module.exports = auth