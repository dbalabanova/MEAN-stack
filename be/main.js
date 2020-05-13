const express = require('express');
const config = require('./config.json')
const cors = require('cors');
const apiRouter = require('./api');
const db  = require('./db');


const app = express();

    app.use(cors({ 
        origin:'http://localhost:4200',
        credentials: true
    }));
    app.use(express.json());
    app.use('/api', apiRouter);
    
    app.use((req, res, next) => {
        const err = new Error('Not found');
        err.status = 404;
        next(err);
    });
    
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            status: err.status || 500,
            message: err.message
        })
    })
    
    app.listen(config.port, () => { console.log(`Server is listening on ${config.port}`)})
