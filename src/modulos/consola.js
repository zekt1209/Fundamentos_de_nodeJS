console.log('log');

console.info('info');

console.error('error');

console.warn('warn');

var tabla = [
    {
        nombre: 'Vic',
        edad: 23
    },
    {
        nombre: 'Marco',
        edad: '18'
    }
];

var array = [1,2,3,4,5, 'melon'];
var string = "Hello world";
var obj = {
    nombre: 'Angel',
    edad: 16
};

console.log(tabla);
console.table(tabla);
console.table(array);
console.table(string);
console.table(obj);


console.time('Tiempo');
console.timeEnd('Tiempo');

const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr 
