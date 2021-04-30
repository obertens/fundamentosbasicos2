//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” 
//cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function print(arr) {
    contador = 0;
    for (var i = 0 ; i<arr.length ; i++) {
        if (arr[i] === "comida") {
            contador++;
            console.log("Yummy");
        }
        
    }
    if (contador == 0 ) {
        console.log("Tengo Hambre");
    }
}
console.log(print(["gato","perro","comida","pajaro"]))