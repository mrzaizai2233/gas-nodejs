const router = require('express').Router();
module.exports =function(app){
    app.use('/api',router);
    router.get('/user',function(req,res,next){
        res.send("oki");
    })
};