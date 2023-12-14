const http = require('http')

// console.log(http);

const PORT = 3001;

// Funcion que le vamos a pasar al crear el servidor con el 'req' y 'res'
function miRouter(req, res) {

    console.log('Nueva peticion')

    // Aqui discriminamos lo que le mostraremos al usuario dependiendo en que url se encuentre
    switch(req.url) {
        case '/holamundo':
            // Escribir el response al usuario
            res.writeHead(201, {'Content-Type' : 'text/plain'});
            res.write('Estas en la ruta del hola mundo');
            res.end();
            break;
        case '/':
            // Escribir el response al usuario
            res.writeHead(201, {'Content-Type' : 'text/plain'});
            res.write('Hey, esta es la ruta RISE! :)');
            res.end();
            break;
 /*        default:
            // Escribir el response al usuario
            res.writeHead(404);
            res.write('Error 404, No se lo que quieres');
            res.end();
            break; */
                
    }

/*     // Escribimos headers en el response
    res.writeHead(201, {'Content-Type' : 'text/plain'});

    // Terminamos el response
    res.end(); */
}

// Creamos el server
http.createServer(miRouter).listen(PORT)


console.log('Estamos escuchando en el puerto: ' + PORT);
console.log(`> Ready on: http://localhost:${PORT}`);
// console.log(server);
