const express=require("express");
const app=express();
require('dotenv').config()


app.get("/",(req,res)=>{
    res.send("Hello world, let's go Cloud with Jenkins automation");
})

app.listen(process.env.PORT || PORT,()=>console.log(`Server is listening on ${process.env.PORT}`))