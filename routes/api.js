var express = require ('express'); 
var router = express.Router(); 

router.get('/test', function(require,result,next){
    result.json{api:true}
});

module.exports=router;