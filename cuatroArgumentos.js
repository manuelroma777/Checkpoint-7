
//  Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
//  Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
//  Si es más pequeño, la consola registra "¡El número es menor que 50!"

function operacionYcomparacion(num1, num2, num3, num4) {
    // Suma los dos primeros argumentos
    var suma1 = num1 + num2;
    // Suma los dos últimos argumentos
    var suma2 = num3 + num4;
    // Multiplica las sumas obtenidas
    var resultado = suma1 * suma2;

    // Compara el resultado con 50
    if (resultado > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

// Ejemplo de uso
operacionYcomparacion(10, 20, 5, 6); // Imprimirá "¡El número es mayor que 50!"
