// La palabra async  la convierte inmediatamente en asíncrona.
const soyAsincrona = async (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Asi se pondria para manejar los errores con el rejecct, esto se ejecuta despues del catch
            // reject('reject en funcion soyAsincrona');
            console.log('Estoy siendo asincrona');
            resolve(nombre);
        }, 1000);
    });

} 

const hola = async (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });

}

const hablar = async (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bla... bla... bla... bla...');
            resolve(nombre);
        }, 1000);
    }); 

};

const adios = async (nombre) => {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Adios, ' + nombre);
            resolve();
        },1000);
    });

}

// Await solo es válido dentro de una función asíncrona.
const main = async () => {
    // let nombre = 'Vicc'; 
    let nombre = await soyAsincrona('Vic');
    await hola(nombre);
    await hablar();
    // Para hacer que se ejecute en segundo plano no debe existi el await
    hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso.');
}

// Esto nos permitirá saber si nuestra función se está ejecutanod de forma asíncrona.
console.log('Iniciando proceso...');
main();


