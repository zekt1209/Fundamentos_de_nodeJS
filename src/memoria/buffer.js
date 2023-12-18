let buffer1 = Buffer.alloc(4);
    // Output:
    //<Buffer 00 00 00 00>
    // toString: (empty)

let buffer2 = Buffer.alloc(4, 99);
// console.log(buffer2.toString())
    // Output
    // <Buffer 63 63 63 63>
    // toString: cccc


// Otras formas de crear un buffer
// Datos en un arreglo
let buffer3 = Buffer.from([1, 2, 3])
// console.log(buffer3);
    // Output
    // <Buffer 01 02 03>


// Datos de tipo string
let buffer4 = Buffer.from('Hola');
// console.log(buffer4);
// console.log(buffer4.toString());
    // Output
    // <Buffer 48 6f 6c 61> -> Los datos qe vienen aqui son una secuencia de datos binarios
    // Hola

// Guardar el abecedario en un Buffer
let abc = Buffer.alloc(26);
console.log(abc);

for (i = 0; i < 26; i++) {
    abc[i] = 97 + i; // El 97 es la 'a' en el codigo ASCII
}

console.log(abc)
console.log(abc.toString())