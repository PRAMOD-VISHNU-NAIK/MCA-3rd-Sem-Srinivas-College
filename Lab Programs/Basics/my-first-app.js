const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("URL", req.url, "\nHeaders", req.headers, "\nMethod", req.method);

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">Submit</button></form></body>');
        res.write('<html>');
        return res.end();
    }

    if( url === '/message' && method === 'POST'){
        fs.writeFileSync("message.txt", "PRAMOD");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title> My First Node Page</title></head>')
    res.write('<body><h1> Hello From My Node Server</h1></body>');
    res.write('<html>');

    res.end();


})

server.listen(3000);