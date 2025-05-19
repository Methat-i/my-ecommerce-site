const express = require('express');
const { status } = require('express/lib/response');
const router = express.Router();

const path =require('path');

const sqlite3 = require("sqlite3").verbose();

const dbPath = path.join(__dirname,'..','data','contact.db');
const db = new sqlite3.Database('../data/contact.db');

db.run(`CREATE TSBLE IF NOT EXISTS contact(
    
    id INTEGER PRIMARY KEY
    fname TEXT,
    lname TEXT,
    email TEXT,
    subject TEXT,
    message TEXT)`
    
);


router.post('/',(req,res)=>{
    const {fname,lname,email,subject,message } =req.body;
    db.run('INSERT INTO contact (fname,lname,email,subject,message) VALUES ("?","?","?","?","?")',
        [fname,lname,email,subject,message ]);

    console.log('contact',{fname,lname,email,subject,message});
    res.status(200).json({status:'Message'});
    
});

VALUES