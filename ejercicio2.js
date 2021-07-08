function persistence(num) {    
    function multiply(n) {
        //El método reduce () ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
        return n.reduce(function(a,b){return a*b;});
    }
    var count =0;     
    // utilizamos el metodo toString para devolver una cadena siempre y cuando sea mayor a un argumento
    while (num.toString().length > 1) {
        // aqui estamos separando el array en elementos individuales como tal estamos utilizando .split como separador
        num= num.toString().split("");
        //introducimos los numeros del array en argumentos separados y los multiplicaremos
        num = multiply(num);
       
        count++;//siempre que el argumento sea mayor a uno se seguira ejecutando gracias al contador ++ y al bucle while
    }
    return count; //retorna el argumento final
}
console.log(persistence(39));//impresion de pantalla por consola
                   
console.log(persistence(999));//impresion de pantalla por consola
                    
console.log(persistence(4));//impresion de pantalla por consola