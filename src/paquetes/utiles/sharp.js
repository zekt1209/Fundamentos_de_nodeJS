// npm i sharp
const sharp = require('sharp');

// console.log(sharp);

sharp('JavaScript-logo.png')
    .resize(80, 80)
    .grayscale()
    .toFile('resized.png');

