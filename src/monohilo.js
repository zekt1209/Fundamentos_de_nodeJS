// console.log('Hello World');

let i = 0;

const helloWorldInfinite = () => {
    i <= 5 ? console.log(`Hello World ${i}`) : clearInterval(refreshId);
    i++;
}

var refreshId = setInterval(helloWorldInfinite, 1000);

// console.log('Hello World 2');
