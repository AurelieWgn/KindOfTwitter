const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');
const errorHandler = require('errorhandler');
require('./database');

const app = express();
exports.app = app
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views')); // give the path to the views
app.set('view engine', 'pug');// to not repete the extention 

require('./config/session.config')
require('./config/passport.config')

// GENERALS MIDDLEWARES 
app.use(morgan('short'));
// To get the folder public with relative path
app.use(express.static(path.join(__dirname, 'public')));
// To pars response format 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

if(process.env.NODE_ENV === "developement"){
    app.use(errorHandler());
}else{
    app.use((err, req, res, next)=>{
        const code = err.code || 500
        res.status(code).json({
            code : code,
            message : code === 500 ? null : err.message
        })
    })
}



app.listen(port);