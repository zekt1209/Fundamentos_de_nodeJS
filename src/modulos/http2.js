// Creating a Node JS server and writing HTML inside it

const http = require('http');
const fs = require('fs');
const {exec} = require('child_process');

const PORT = 3001

// console.log(http.STATUS_CODES)

fs.readFile('./public/index.html', (err, html) => {
    if (err) {
        console.error('Error en funcion readFile, error: ' + err);
    }

    http.createServer((req, res) => {
        // Request
        console.log(req.url);
        console.log('Nueva peticion!');
    
        // Response
        // res.writeHead(201, {'Content-Type': 'application/json'})
        res.writeHead(201, {'Content-Type': 'text/html'})
        // res.write('Hey from nodejs!')
        res.write(html);
        res.end();
    }).listen(PORT);

})


console.log(`> Ready on: http://localhost:${PORT}`);