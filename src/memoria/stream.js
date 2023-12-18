const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

/* Un stream es el proceso de ir consumiendo datos al tiempo que se están recibiendo. En palabras del profesor, es el paso de datos entre un punto y otro. */

const readableStream = fs.createReadStream(__dirname + '/archivo.txt');
readableStream.setEncoding('utf-8');

/* readableStream.on('data', chunk => data += chunk)
readableStream.on('end', () => console.log(data)) */

/* En estos casos podemos escribir en buffer de la salida del sistema, process.stdout es un buffer de escritura en que empieza a trabajar para generar todo esto. */

/* process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal') */

/* Para usar los streams, podemos usarlos de la siguiente forma */
const Transform = stream.Transform

function Upper() {
    Transform.call(this)
}

util.inherits(Upper, Transform)

Upper.prototype._transform = function (chunk, codif, cb) {
    chunkUpper = chunk.toString().toUpperCase()

    this.push(chunkUpper)
    cb()
}

let upper = new Upper()

readableStream
    .pipe(upper)
    .pipe(process.stdout)

