// Escuchar algunos eventos que ya vienen nativos con nodeJS, sin require

process.on('exit', () => {
    console.log('Evento ON exit');
});

process.on('beforeExit', () => {
    console.log('Evento BEFORE exit');
});

console.log('Console log normal');

process.on('uncaughtException', (err, origin) => {
    console.error('Se nos ha olvidado capturar un error');
    // console.error(err);
})

setTimeout(() => {
    console.log('Esto SI se ve');
}, 2000);

funcionQueNoExiste();

setTimeout(() => {
    console.log('Esto NO se ve');
}, 2000);

