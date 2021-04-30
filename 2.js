//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function mayormenor(arr) {
    var menor = arr[0];
    var mayor = arr[0];
    for (i = 0; i <arr.length ; i++){
        if (menor > arr[i]) {
            menor = arr[i];
        
        }
        if (mayor < arr[i]){
            mayor = arr[i];
        }
    }
    console.log(menor)
    return mayor;
    
}
console.log(mayormenor([5,-1,2,-4,6]));