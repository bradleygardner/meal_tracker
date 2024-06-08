const mongodb = require('./db/db')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
dotenv.config();

require('./services/auth');
const express = require('express');
const session = require("express-session");
const passport = require('passport');
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'))
    .use(session({secret : process.env.SESSION_SECRET}))
    .use(passport.initialize())
    .use(passport.session())
const port = 8080;


mongodb.startdb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(process.env.PORT || port, () => {
            console.log('Web Server is listening at port ' + (process.env.PORT || port));
        });
    }
});
