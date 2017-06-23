/*
var express = require("express");
var path1=require("./paths/path1");
var app = express();
app.use("/mypath",path1);
app.get("/*",function (req,res,end){
    res.end("ok. that's a start also");
});
app.listen (8080);
*/


var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/test";
mongoClient.connect(url,function(err,db){

    var bank_data = db.collection("bank_data");
    bank_data.insertOne({"first_name":"tratra","last_name":"bram","police":[
    {
        "coming":"maybe",
        "shouting":"maybe"

    },
    {
        "tramming":"whay",
        "cramming":"www"
    }
    ]},function(err,op_result){
        console.log(err);
    });
    console.log("everything's ok");
})











