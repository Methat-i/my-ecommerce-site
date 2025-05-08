const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

var server = http.createServer(function (req, res) {

  //var q = url.parse(req.url, true).query;
  //var txt = q.fname + " " + q.lname;

  var q = url.parse(req.url,true);
  let filePath = "."+ req.url;
  if(filePath === "./") filePath = "./index.html";//=== Type

const extname = path.extname(filePath);
let contaentType = "text/html";
if(extname ===".css") contaentType = "text/css";
if(extname ===".xml") contaentType = "text/xml";
   fs.readFile(filePath,function(err, htmlDoc){
    if(err){
        res.writeHead(404,{'Content-Type': 'text/html'});
        return res.end("404 File Not Found!!!!")
    }
    res.writeHead(200, {'Content-Type': contaentType});
    res.write(htmlDoc)
    res.end();
  });
 
  
})
server.listen(4000);