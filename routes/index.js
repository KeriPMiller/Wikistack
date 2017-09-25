const express = require('express');
const router = express.Router();
const models = require('../models');
const wikiRouter = require ('./wiki');
const userRouter = require ('./user');


    router.use('/',function(req, res, next) {
        models.Page.findAll ({})
        .then (inst => {res.render('index',{
            urlTitle: ints.getDataValue('urlTitle'),
            title: inst.getDataValue('title')
        })
    })
        .catch(next);
    }
    router.use('/wiki', wikiRouter);
    router.use('/user', userRouter);

module.exports = router;