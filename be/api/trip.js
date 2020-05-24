const models = require('../models');
const router = require('express').Router();
const {auth} = require('../utils')

router.get('/', auth(), (req, res, next) => {
    models.Trip.find().then(trips => {
        res.send(trips)
    }).catch((err)=>{
        res.status(404)
    })
});

router.post('/create', auth(), (req, res, next) => {
    const {user}  = req;
   const userId = req.user._id;
   const {name, imagePath, description } = req.body
    models.Trip.create({name, imagePath, description, creatorId:userId})
    .then(trip => {
        res.send(trip)
    }).catch(err => { console.log(JSON.stringify(err))})
});

router.get('/:id', auth(), (req, res, next) => {
    const id = req.params.id;
    // const {user} = req;
    models.Trip.findById(id).then(trip => {
        res.send(trip)
    }).catch(next)
    // res.send(id)
});

router.put('/:id', auth(), (req,res, next) => {
    const id = req.params.id;
    const { name, imagePath, description } = req.body[id]
    models.Trip.findByIdAndUpdate(id,{name, imagePath, description}).then(trip => {
        res.send(trip);
    })
})

router.delete('/:id', auth(), (req, res, next) => {
    const id = req.params.id;
    models.Trip.deleteOne({ _id: id }).then((deletedTrip)=>{
        res.send(deletedTrip)
    })
})
module.exports = router;