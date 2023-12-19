 // Patron Error First Callback cuando manejamos callbacks en funciones asincronas
 function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z; // Truena, z is not defined
            callback(null, a) // El error va a ser null, el valor que vamos a devolver es a
        } catch (error) {
            callback(error /* , null*/ ) // Solo devolvemos el error (Undefined), o podemos definir que por defecto venga un null (es cuestion de diseño)
        }
    }, 1000)
 }

 asincrona((error, dato) => {
    if (error) {
        console.error('Tenemos un error')
        console.error(error)
        // throw error -> Esto crashea nuestra aplicacion, no suele ser buena practica
        return false;
    }
    console.log('Todo ha ido bien')
 })