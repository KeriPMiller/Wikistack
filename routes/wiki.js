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
            res.json(req.body);
            var page = Page.build({
                title: req.body.title,
                content: req.body.content,
                //urlTitle: getURL(req.body.title)
            });
            page.save();
    });
//render looks into the views folder of the file name specified
    router.get('/add', function (req, res, next) {
        res.render('addpage');
        // res.send("got to Get /wiki/add");

    });

// function getURL (title)  {
//     if(title)   {
//     var spc = new RegExp(/\s/,'g');
//     var newT = title.replace(spc, '_');
//     return newT;
    
//     }
//     else {
//     // Generates random 5 letter string
//     return Math.random().toString(36).substring(2, 7);
//   }
// }




module.exports = router;
