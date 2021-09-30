const express=require('express');
const app=express();
const body_parser=require("body-parser");
const checkAdmin=(req,res,next)=>{
    console.log("hello world");
    if(req.query.auth=="hjvjhcgchgchgchx")
    next()
    else//agr else na lagaye to next ni chlta
    res.status(401).send("should be admin")
};
app.use(express.urlencoded());//req.body ke ander milne k liye
app.use(body_parser.json());
//app.use(checkAdmin);//agr isko sbse last m laga dia then it won't get executed
app.post('/',(req,res)=>{
    console.log('req.body->',req.body);//this cannot be converted directlyinto object as it is coming in encypted format
    res.json({text: req.body})
})
const sendRespond=(req,res)=>{
    res.status(200);
    res.send(req.query);
}
app.get('/',sendRespond)//get ki call m catch use hota pr post ki calls m nhi =>more securedeither form data or json
//middleware executes before main fun to whether it is ok to run the main one or not:-^
//they are used for permission,login system
app.listen(4000);
