const express = require('express');
var bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan');
const metodOveride = require('method-override');



//initializaciones
const app = express();



//setings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));



//middleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(metodOveride('_method'))




//routes

app.use(require('./routes/notes.routes'));


//static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app; 