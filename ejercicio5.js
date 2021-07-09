function comp(arr1, arr2)
{
    //nos aseguramos de que las matrices están establecidas y son de igual longitud
    if(arr1 == null || arr2 == null || arr1.length != arr2.length)
        return false;
    // ordenamos la matriz con sort le ponemos su condición para que recorra toda la matriz y definimos la var v para nuestro recorrido
    var intSorter = function(a,b){return a-b;};
    arr1.sort(intSorter);
    arr2.sort(intSorter);
    for(var i=0;i<arr1.length;i++)
    {
        var v = arr1[i];
        // si el cuadrado del valor en arr1 no es igual al valor de arr2, las matrices no coinciden
        if(v*v!=arr2[i])
            return false;
    }
    return true;
}
console.info(comp([2,6,3,8,4,5], [25,64,16,36,4,9]));
console.info(comp([2,6,3,8,4,5], [25,64,17,36,4,9]));
console.info(comp([2,6,3,8,4,5], [25,64,16,36,4,9,9]));