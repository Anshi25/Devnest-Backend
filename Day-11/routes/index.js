var express = require('express');
var router = express.Router();
var registerInitialCheck=require("../middlewares/registerChecks");
var register=require("../controllers/register");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires{email,pas,conpass}-request.body m aayega
 * @description
 * security,performance and edge cases
 * level1
 * email validate
 * pass validate
 * pass==conpass
 * level2
 * js /sql injection to nhi h->string m kuch bhi run ho skta
 * level3
 * check if email already exists
 * pass # 
 * email lowercase
 * save
 */

router.post('/register',registerInitialCheck,register)

module.exports = router;
