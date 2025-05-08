const express = require('express');
const { status } = require('express/lib/response');
const router = express.Router();

router.post('/',(req,res)=>{
    const{fname,lname,subject,message }=req.body
    console.log('contact',)
    res.status(200).json({status:'Message'})
    
});