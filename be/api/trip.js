const models = require('../models');
const router = require('express').Router();

router.get('/', (req, res, next) => {
    models.Trip.find().then(trips => {
        res.send(trips)
    }).catch(()=>{
        next(new Error ('There are no trips to show you'))
    })
});




module.exports = router;