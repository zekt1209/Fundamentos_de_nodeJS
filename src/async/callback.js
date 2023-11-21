const soyAsincrona = (miCallback) => {
    setTimeout(function() {
        console.log('Estoy siendo asincrona');
        miCallback();
    }, 1000);
    // setTimeout(miCallback, 2000);
} 

const hola = (nombre, callback) => {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        callback(nombre);
    }, 1000);
}
const adios = (nombre, otroCallback) => {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    },1000);
}

// 1- Primer proceso
console.log('Iniciando proceso...');

// 2- Aqui inicia todo
soyAsincrona(function(nombre) {

    // 3- Se ejecuta lo que haya en soyAsincrona
    // 4- Recibe un callback, que en este caso es esta funcion anonima (Si nunca se mandara a llamar 'miCallback' dentro de soy asincrona, el codigo de aqui para abajo nunca se ejecutaria ... )
    // 5- Se manda llamar otra funcion dentro del callback de soyAsincrona
    hola('Vic', function(nombre) {

        // 6 - Se ejecuta lo que haya en hola
        // 7- Se manda llamar otra funcion dentro del callback de hola
        adios(nombre, function() {

            // 8- Se ejecuta lo que haya en adios
            // 9- Aqui termina el programa
            console.log('Terminando proceso...');
        });
    });
});
