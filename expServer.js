const express = require('express');
const path = require('path');
const app = express();

//serve static filesvfrom current project folder
app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.sendfile(path.join(__dirname));
});

app.listen(3000,( )=> {

    console.log("Server running at http://localhost:3000");
});