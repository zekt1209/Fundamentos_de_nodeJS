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
        console.log('Bla... bla... bla...');
        callbackHablar();
    }, 1000);
};

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
    hola('Vic', function(nombre) {
        hablar(function() {
            hablar(function() {
                hablar(function() {
                    hablar(function() {
                        adios(nombre, function() {
                            console.log('Terminando proceso...');
                        });
                    });
                });
            });
        });
    });
});
