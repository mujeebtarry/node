const http = require('http')
const colors = require('colors');
console.log('hello'.green);
http.createServer((req,res) =>{
res.write("<h1>Server ac=tive,Sending response</h1>")
res.end();
}).listen(4500)