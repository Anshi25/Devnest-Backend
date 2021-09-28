const express=require('express');
const app=express();

/*Create - PUT
Read - GET
Update - PATCH
Delete - DELETE
ath pattern syntax:

/abc?d - Matches /abcd or /abd
/ab+cd - Matches /abcd, /abbcd, /abbbbbcd
/ab*cd - Matches /abcd, /abxcd, /abFOOcd, /abbArcd
/a(bc)?d - Matches /ad or /abcd
Basically,

? means previous character/bracketed group of characters can appear 0 or 1 times.
+ means previous character/bracketed group of characters can appear 0 or more times.
* means any characters including no characters can appear.

*/
//crud post,get,put,delete..baaki you can write a b or anyother name instead of req,res



/*

Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

app.get("/users/:userId/books/:bookId", function (req, res) {
  res.send(req.params);
});


*/
app.get('/',(req,res)=>{
    res.sendStatus(200).send("Hello");//shortcut
    //res.send();//nothing but return statement iske neeche ki lines nhi chlti
});

app.get('/Products',(req,res)=>{
    res.send(req.query.q);
})
// limit =50 =>parameters chahiye =>variables
//? limit=50 & q=ngj   space k bd ngj same m ..ab maanlo string ke ander & h tb bhi alag banadega..
//yhi banrha query k obj-|

//200 => ok h status code agr 201 that means updated in db successfully..send m kuch n bhejo then also pta chaljayega km hua ki ni
//201 => created 
//400 401 402 =>bad request like validation err client side se dikkt h
// 500 server crash => server side se dikkat h ....internal server err... mere code m gdbd h

//ab(cd)?e///cd optional h hoga acchi bt h vrna to chlega hi....'/a/=>a k bd kuch bhi clega../.*fly$/kuch bhi lst m fly
app.listen(5000);
