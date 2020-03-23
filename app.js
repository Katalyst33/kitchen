require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment');
const bcrypt = require("bcrypt");
const  jwt =require('jsonwebtoken');

mongoose.connect(  "mongodb://127.0.0.1/kitchen",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
    console.log("Connected to Mongo Database Successfully");
}).catch((err) => {
    console.log("Failed to Connect to MongoDb ", err);
});

//routes
const mailer = require('./api/service/mailer');
const user = require('./api/routes/user');

//middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/api/user', user);
app.use('/api/mailer', mailer);

//error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err :{};
    const status = err.status || 500;


//respond to client
    res.status(status).json({
        error:{
            message:error.message
        }
    });

//respond to ourselves
    console.error(err);

});

app.use(express.static(__dirname + '/dist/'));
//handle SPA
app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));



module.exports = app;
