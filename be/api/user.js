const models = require('../models');
const router = require('express').Router();

router.get('/', (req, res, next) => {
models.User.find().then((users) =>{
    res.send(users)
})
})

module.exports = router;