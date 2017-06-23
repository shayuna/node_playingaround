var express = require("express");
var router = express.Router();

router.get("/*",function(req,res,next){
    console.log ("something happened");
    res.end("that's a start");
});
module.exports=router;