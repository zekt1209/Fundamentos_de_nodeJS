const isOdd = require('is-odd');
const isEven = require('is-even');

const process = require('process');

let number = 2;

console.log('El ' + number + ' es IMPAR?: ' + isOdd(number));
console.log('El ' + number + ' es PAR?: ' + isEven(number));


process.on('exit', () => {
    console.log('Adios')
});
