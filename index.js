const express=require("express");
const app=express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });


app.get("/",(req,res)=>{
    res.send("Hello world, let's go full cloud testing with Jenkins automation of CI/CD to build a docker image, pull and run a container on the ec2 server");
})
