

/*Primero verifica que la entrada sea una cadena
  Luego, verifica si la longitud es 4 o 6
  Luego, verifica si todos los caracteres de la cadena son dígitos
*/ 


function validatePIN (pin) {
  if (typeof pin !== "string") return false;
  let len = pin.length;
  return (len === 4 || len === 6) && /^\d+$/.test(pin);
}