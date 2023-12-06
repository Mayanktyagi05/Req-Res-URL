
const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url === '/home'){
        res.write('Welcome home');
    }
    if(url === '/about'){
        res.write('welcome to about us')
    }
    if(url === '/node'){
        res.write('welcome to my node js project');
    }
    res.end();
})

server.listen(4000);