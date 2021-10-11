const User=require('../models/user');
const bcrypt = require('bcrypt');
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * check if email already exists
 * pass # 
 * email lowercase
 * save
 */
const saltRounds=10;
const register=(req,res)=>{
    const {email,password}=req.body;
    try{
        const alreadyExists=await User.findOne({where:{email}});
        if(alreadyExists){
            res.status(401).send("Email already exists");
        }  
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(myPlaintextPassword, salt);

        
        const newUser=new User({email:email.toLowercase(),password: hash})
        const savedUser=await newUser.save();
        res.status(201).send(savedUser);
    }catch(err){
        console.error(err);
        res.status(500).send("Something went wrong");
    }  
}
module.exports=register;