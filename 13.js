//Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, 
//el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el 
//array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function centro(arr) {
    var primero = 0;
    var ultimo = arr.length-1;
    while (primero < ultimo) {
        var inicio = arr[primero];
        var final = arr[ultimo];
        arr[primero] = final;
        arr[ultimo] = inicio;
        primero = primero+2;
        ultimo = ultimo-2;
    }
    console.log(arr);
    
    
}
centro([1,2,3,4,5,6]);


