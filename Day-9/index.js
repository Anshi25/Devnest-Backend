const express=require("express");
const { networkInterfaces } = require("os");
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use('/',(req,res)=>{
   //1) res.sendFile(path.join(__dirname,"public/anshi.jpeg"));//to send this file to frontend
   //2) res.download(path.join(__dirname,"public/test.json"),"hello.json")//it downloads
   //3) res.render('index',{title:"Express"})
   //4) there is one more method to use the static file like app.use(express.static(path.join(__dirname,'public)))=>now path upto public is available to all
   //npx express-generator
   res.
   status(201)
   .cookie("token","test",{
      expires: new Date(Date.now() + 8*3600000)
   })
   .cookie("hello","hello")
   .redirect(301,"/admin")

})

app.listen(3000);