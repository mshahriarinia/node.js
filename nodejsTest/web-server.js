var http = require("http")
var s = http.createServer(function(req, res){ //has a call back funciton which is called whenever a request is received at teh server.
    res.writeHead(200, {"content-type" : "text/plain"})
    res.end("hello world.\n")
}) 
s.listen(8000)
