//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el 
//número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function escala(arr, num){
    for (i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i] * num;
    }
    return arr;

}
console.log(escala([1,2,3],4));
