//Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares 
//seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

    function parimpar(array) {
        var impares = [];
        var pares = [];
        for (i = 0 ; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                pares = pares + i;

            
            return pares;
        }
        }
    }