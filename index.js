const express=require("express");
const app=express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });


app.get("/",(req,res)=>{
    res.send("Hello world, let's go Cloud with Jenkins CI/CD to build a docker image, pull and run on my local computer");
})

app.listen(process.env.PORT || PORT,()=>console.log(`Server is listening on ${process.env.PORT}`))