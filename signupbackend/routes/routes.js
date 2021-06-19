const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/signUpModels')



router.post('./signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({ fullName:request.body.fullname,
        email:request.body.email,
        password:request.body.password
       


    })
    signedUpUser.save.save()
    .then(data=>{
        response.json(data)
    })
.catch(error=>{
    response.json(error)
})



})




module.exports=router;