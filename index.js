const express = require('express');
const morgan = require('morgan');
const app = express();
var bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const models = require('./models');

const env = nunjucks.configure('views', {noCache: true}); //where you find the fiews, caching off
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//log information about each incomming request
app.use(morgan('dev'));

//Body parsing middleware
app.use(bodyParser.urlencoded({extended: true})); //for html form submits
app.use(bodyParser.json()); //would be for ajax request

//serves up static files from public folder
app.use(express.static('public'));

app.get('/', function (req, res)    {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

// // this drops all the tables and recreates them based on our js deffinitions
// models.db.sync({force: true});

models.User.sync({})
    .then(function ()  {
        return models.Page.sync({})
    })
    .then(function ()   {
        app.listen(1337, function ()  {
            console.log('listening on port 1337');
        });
    })
    .catch(console.error);


// //set up server
// var server = app.listen(1337, function ()  {
//     console.log('listening on port 1337');
// });