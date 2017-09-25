const express = require('express');
const router = express.Router();
const models = require('../models');
const wikiRouter = require ('./wiki');
const userRouter = require ('./user');


    router.use('/wiki', wikiRouter);
    router.use('/user', userRouter);
    router.use('/',function(req, res, next) {
        
        models.Page.findAll()
        .then(inst => {
            res.render('index', {pages: inst});
        })
        .catch(next);
    });
    
    
module.exports = router;
