console.time('todo')

let suma = 0;

console.time('bucle')
    for (let i = 0; i < 1000000; i++) {
        suma++;
    }
console.timeEnd('bucle')

console.time('bucle2')
    for (let i = 0; i < 1000000; i++) {
        suma = suma + 1;
    }
console.timeEnd('bucle2')

console.time('bucle async')
console.log('Empieza el proceso asincrono')

asyncFunction()
    .then(() => {
        console.timeEnd('bucle async')
    })

console.timeEnd('todo');


function asyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Termina el proceso async')
            resolve()
        }, 0)
    })
}