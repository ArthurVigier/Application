var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    var now = new Date().getFullYear()
     res.send("year : " + now);
  });

  module.exports = router