const db  = require('./db');

db.then(() => {
    console.log('Connected to db successfully');
    require('./main')
}).catch(err => {
    console.log('Cannot connect the database');
    process.exit();
})
