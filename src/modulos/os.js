// Modulo que sirve para acceder a datos del sistema operativo en el que nos encontramos

const os = require('os');

const SIZE = 1024;

function kb(bytes) {
    return bytes / SIZE;
}
function mb(bytes) {
    return kb(bytes) / SIZE;
}
function gb(bytes) {
    return mb(bytes) / SIZE;
}

// Ver la lista de funciones disponibles
// console.log(os);


// Architecture
console.log(`Architecture: ${os.arch()}`);

// Platform
console.log(`Platform: ${os.platform()}`);

// CPUs
console.table(`CPUs: ${os.cpus().length}`);
// console.log(os.cpus());
console.table(os.cpus());
console.log(`\n`)


// Constantes
// console.log(os.constants) // Propiedades especificas de procesos de bajo nivel

// Memoria libre
console.log(`Memoria en bytes: ${os.freemem()}`) // Memoria en Bytes
console.log(`Memoria en KB: ${kb(os.freemem())}`) // Memoria en KB
console.log(`Memoria en MB: ${mb(os.freemem())}`) // Memoria en MB
console.log(`Memoria en GB: ${gb(os.freemem())}`) // Memoria en GB
console.log(`\n`)

// Memoria total
console.log(`Total de memoria en GB: ${gb(os.totalmem())}`)
console.log(`\n`)

// Directorio raiz
console.log(`Directory for the user root: ${os.homedir()}`)
console.log(`\n`)

// Directory for temporary files
console.log(`Directory for temporary files: ${os.tmpdir()}`)
console.log(`\n`)

// Hostname of a server
console.log(`Hostname of a server: ${os.hostname()}`)
console.log(`\n`)

// Active Network Interfaces right now
console.log(`Network Interfaces Right Now:`);
console.log(os.networkInterfaces())

console.log(os.version())
console.log(os.type())