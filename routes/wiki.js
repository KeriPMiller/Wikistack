const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;

    router.get('/', function (req, res, next)  {
       res.redirect('/');
    });
    router.post('/', function (req, res, next)    {
            // res.json(req.body);
            var page = Page.build({
                title: req.body.title,
                content: req.body.content,
            })
            return page.save()
            .then(inst => {
                var url = inst.getDataValue('urlTitle');
                res.redirect(url);
                // res.redirect(inst.route); //routevirtal FTW
            })
            .catch(next);
            
    });
    //render looks into the views folder of the file name specified
    router.get('/add', function (req, res, next) {
        res.render('addpage');
        // res.send("got to Get /wiki/add");

    });
    router.get('/:urlTitle', function (req, res, next) {
        Page.findOne({
            where: {
                urlTitle: req.params.urlTitle}
        })
        .then(function (foundPage) {
            //res.json(foundPage);
            console.log(foundPage);
            res.render('wikipage', {
                content: foundPage.getDataValue('content'),
                title: foundPage.getDataValue('title')
            });
        })
        .catch(next);
    });

module.exports = router;
