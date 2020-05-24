const models = require('../models');
const router = require('express').Router();
const {auth} = require('../utils')

router.get('/', (req, res, next) => {
models.User.find().then((users) =>{
    res.send(users)
})
})

router.get('/currentUser', auth(),(req, res, next) => {
    models.User.findById(req.user.id).then(user => {
        res.send(user)
    })
})

module.exports = router;