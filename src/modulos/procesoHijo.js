const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

console.clear()
// Proceso para limpiar la consola de linux cada que ejecutemos nuestro programa 'Proceso Hijo' 
exec('clear', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return false;
    }
})

/* exec('ls -la', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
})


exec('node ./modulos/consola.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);

// console.log(proceso.pid);
// console.log(proceso.connected);

proceso.stdout.on('data', function(data){
    console.log('Esta muerto?');
    console.log(proceso.killed);
    console.log(data.toString());
});

proceso.on('exit', function() {
    console.log('El proces o termino')
    console.log(proceso.killed)
})


/* const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
}); */


/* const { spawn } = require('node:child_process');
const grep = spawn('grep', ['ssh']);

console.log(`Spawned child pid: ${grep.pid}`);
grep.stdin.end(); */



