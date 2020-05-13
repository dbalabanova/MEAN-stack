const jwt = require('jsonwebtoken');
const appConfig = require('../app-config')

function createToken(data) {
    return jwt.sign(data, appConfig.secret, {expiresIn: '10m'})
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, appConfig.secret, (err, data) => {
            if(err) { reject(err); return; }
            resolve(data);
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}