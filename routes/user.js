const express = require('express');
const router = express.Router();
const models = require('../models');
const User = models.User;

router.get('/', function (req, res, next)   {
    res.send("got to get /user/");
    
});
router.get('/:id', function (req, res, next)   {
    res.send("got to get /user/ with id " + req.params.id);
    
    
});
router.post('/', function (req, res, next)   {
    res.send("got to get /user/");
    
    
});
router.put('/:id', function (req, res, next)   {
    res.send("got to post /user/ with id " + req.params.id);
    
    
});
router.delete('/:id', function (req, res, next)   {
    res.send("got to delete /user/ with id " + req.params.id);
    
});



module.exports = router;
