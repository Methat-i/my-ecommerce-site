const express = require('express');
const router = express.Router();

//const subject-text = '{ "contactSubject": ["General Enquery","classes", "Schedules", "Instructors", "Prices", "Other" , "ice"]}';
const subject_file = require('../Data/contact_subject.json');

router.get('/',(req,res)=>{
    //res.end(subject);
    res.json(subject_file);
});

module.exports = router
