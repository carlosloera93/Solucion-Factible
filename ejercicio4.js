function arrayDiff(arr1, arr2) {
    return arr1.filter(vala => !arr2.includes(vala));
}

/*tenemos en nuestro contenedor arr1 y arr2 
  entonces filtramos pero siempre que utilizamos filtre se crea un nuevo arreglo
  entonces filter va checar todos los elementos de arr1 y siempre que sean diferentes 
  a arr2 los va incluir en vala y listo tenemos nuestra nueva lista filtrada
*/