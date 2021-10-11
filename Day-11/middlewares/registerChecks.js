const {emailValidate,passwordValidate} =require('../utils/validate');

/**
 * 
 * @param {*} res 
 * @param {*} req 
 * @param {*} next 
 * email validate
 * pass validate
 * pass==conpass
 */

const registerInitialCheck=(res,req,next)=>{
    const {email,password,confirmPassword}=req.body;
    if(
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length>0 &&
        password.length>8 &&
        confirmPassword === password &&
        emailValidate(email) &&
        passwordValidate(password)
      ) {
          next();
      } else{
        res.status(401).send("Initial check fail");
      }
}

module.exports=registerInitialCheck;