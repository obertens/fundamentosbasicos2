/**
 * 10. Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
 * Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
 * Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
 */

function invertir(arr){
    var nueva_posicion=0;
    for(var i=arr.length-1; i>nueva_posicion;i--){
        inicio=arr[i];
        final=arr[nueva_posicion];
        arr[i]=final;
        arr[nueva_posicion]=inicio;
        nueva_posicion++;
    }
    return arr;
}



console.log(invertir([3,1,6,4,2]))