const http = require('http');
const currentDateTime = require("./myFirstModule")
const uc=require('upper-case');
http.createServer((req,res)=>{
    // res.writeHead(200,{'Content_type':'text.html'});
    const mssg=uc.upperCase('Hello Alien');
    res.end(mssg+currentDateTime.myDateTime());
}).listen(8080);
console.log('App running on port 8080');