const siSirve = () => {
    console.log('Funcion que si sirve');
}

function seRompe() {
    var numero = z + 3;
}


try {
    siSirve(); // SI se ejecuta
    seRompe(); // Rompe y Pasa al catch en este momento
    siSirve(); // NO se ejecuta

} catch (error) {
    console.error('Ha habido un error en la funcion seRompe');
}