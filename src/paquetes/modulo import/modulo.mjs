function sayHello() {
    console.log('Hello World');
}

const prop1 = 'Test prop1'; 
const prop2 = 2;

// Opcion 1
// export default sayHello;

// Opcion 2
export default {
    sayHello,
    prop1,
    prop2,
    prop3: 'Hola que tal',
}