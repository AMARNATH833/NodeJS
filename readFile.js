var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('readFile.html',function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(5000);