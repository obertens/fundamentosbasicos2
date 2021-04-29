//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grand
//e([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
    function grande(arr) {
        for (i = 0 ; i < arr.length; i++ ) {
            if ( arr[i] > 0  ) {
                arr [i] = "big";
                }
            
        }
        return arr;
    }

    console.log(grande([1,-5,4,-8,7]));
