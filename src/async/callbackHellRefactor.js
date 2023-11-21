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

const hablar = (callbackHablar) => {
    setTimeout(function() {
        console.log('Bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla... bla...');
        callbackHablar();
    }, 1000);
};

const adios = (nombre, otroCallback) => {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    },1000);
}

//En esta parte del código uso funciones recursivas porque estoy llamando a conversacion dentro de si misma. Y mediante un If como condicional le digo que cantidad de veces va a  ejectuarse la funcion hablar.
const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
};

// 1- Primer proceso
console.log('Iniciando proceso...');

// 2- Aqui inicia la llamada a las funciones
    // La funcion conversacion soluciona el problema al callbackHell de cierta manera
hola('VictorJG', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado.')
    });
});



// *** HELL ***
// soyAsincrona(function(nombre) {
//     hola('Vic', function(nombre) {
//         hablar(function() {
//             hablar(function() {
//                 hablar(function() {
//                     hablar(function() {
//                         adios(nombre, function() {
//                             console.log('Terminando proceso...');
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
