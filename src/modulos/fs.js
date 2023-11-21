// El core de node ya tiene este metodo de fs, no tenemos que decirle de donde viene por lo mismo de que ya lo tiene el core por defecto
const fs = require('fs');

const leer = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        // Leido
        cb(data.toString());
    })
};

const escribir = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('Ocurrio un error en la funcion escribir, error: ' + err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
};

const borrar = (ruta, cb) => {
    fs.unlink(ruta, (err) => {
        if (err) {
            console.error('Hubo un error en la funcion de borrar, error: ' + err);
        } else {
            console.log('Se ha borrado el archivo exitosamente');
        }
    });
};

// console.log(__dirname);

leer(__dirname + '/archivo.txt', console.log);
// escribir(__dirname + '/archivoNuevo.txt', 'Hey, este es un archivo nuevo!', console.log);
// borrar(__dirname + '/archivoNuevo.txt');