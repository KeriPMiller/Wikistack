const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;

    router.get('/', function (req, res, next)  {
        res.redirect('/');
        // res.send('got to GET /wiki/');
        // console.log(Page.findAll()
        //             .then(res => res.data)
        //             .then(info => console.log(info))
        //         );
        // // res.send(Page.findAll());
    });
    router.post('/', function (req, res, next)    {
        res.send("got to Post /wiki/");
    
    });
//render looks into the views folder of the file name specified
    router.get('/add', function (req, res, next) {
        res.render('addpage');
        // res.send("got to Get /wiki/add");

    });

module.exports = router;
