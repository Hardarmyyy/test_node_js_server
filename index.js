const express=require("express");
const app=express();
PORT=3990


app.get("/",(req,res)=>{
    res.send("Hello world, let's go Cloud with Jenkins CI/CD to build a docker image");
})

app.listen(process.env.PORT || PORT,()=>console.log(`Server is listening on ${process.env.PORT}`))