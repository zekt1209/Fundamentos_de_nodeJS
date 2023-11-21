const soyAsincrona = (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Asi se pondria para manejar los errores con el rejecct, esto se ejecuta despues del catch
            // reject('reject en funcion soyAsincrona');
            console.log('Estoy siendo asincrona');
            resolve(nombre);
        }, 1000);
    });

} 

const hola = (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });

}

const hablar = (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bla... bla... bla... bla...');
            resolve(nombre);
        }, 1000);
    }); 

};

const adios = (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Adios, ' + nombre);
            resolve();
        },1000);
    });

}


console.log('Iniciando proceso...');
hola('Vic')
    .then(soyAsincrona)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch(error => {
        console.error('Hubo un error');
        console.error(error);
    });
