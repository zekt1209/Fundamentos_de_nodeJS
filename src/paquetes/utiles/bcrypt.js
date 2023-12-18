// npm i bcrypt
const bcrypt = require('bcrypt');

const password = 'mySecretPassword';
const saltRounds = 8;

// Generar el hash
bcrypt.hash(password, saltRounds, function(err, hash) {

    console.log(hash);

    // Consultar si el hash coincide con nuestro password
    bcrypt.compare(password, hash, function(err, res) {
        console.log(res);
    });

});

