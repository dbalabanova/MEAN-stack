const router = require('express').Router();
const userRouter = require('./user');
const tripRouter = require('./trip');
const models = require('../models');
const utils = require('../utils');
const appConfig = require('../app-config')

router.post('/register', (req, res, next) => {
    const { email, password } = req.body;
        models.User.create({ email, password })
        .then(user => res.send(user))
        .catch(next)
    });
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    models.User.findOne({email}).then(user => {

        if(!user) { res.send({error: "Not Found"}); return }
        
        Promise.all([user, user.matchPassword(password)])
        .then(([user, match]) => {
            if(!match) {
                res.status(400).send('Wrong password or username')
                return;
            }
            const token = utils.jwt.createToken({id: user._id});
            res.cookie(appConfig.authCookieName, token, { httpOnly: true });
            res.send({user})
        }).catch(next)
    })
})

router.get('/logout', (req,res,next) => {
    const token = req.cookies[appConfig.authCookieName];
    res.clearCookie(appConfig.authCookieName)
    res.send()
    
})


router.use('/users', userRouter);
router.use('/trips', tripRouter);

router.get('/', (req, res, next) => {
    res.send('Hello')
});

module.exports = router;