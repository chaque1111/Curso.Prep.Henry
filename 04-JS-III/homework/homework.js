// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
for(let i=0; i<1; i++){
  return array[i];
}
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let i = array.length - 1;
  return array[i]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 for(let i=0; i<array.length; i++){
   array[i] +=1;
 }
 return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;


}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:


let str = palabras.reduce((acc,elemento) => acc +" "+elemento)
return str;
  
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let esta = array.includes(elemento)
  if( esta === true){
    return true;
  }else{ return false}

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   
 return numeros.reduce((acc,elem) => acc + elem)
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma = resultadosTest.reduce((acc,element) => acc = acc + element)
  promedio = suma / resultadosTest.length;
  return promedio
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor =0;
   numeros.forEach(elemento => (elemento > mayor? mayor = elemento : mayor = mayor ));

return mayor 
}
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length<1){
    return 0;}

  let total=1;
   for(let i=0; i<arguments.length; i++){
     total *= arguments[i];
   }

return total 



}
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
let mayor18=0;
arreglo.forEach(element => element>18 ? mayor18++ : mayor18 = mayor18);

return mayor18

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 

 switch(numeroDeDia){  
    case 1:{ return "Es fin de semana"; break;} 
    case 2:{ return "Es dia Laboral"; break;}
    case 3:{ return "Es dia Laboral"; break;}
    case 4:{ return "Es dia Laboral"; break;}
    case 5:{ return "Es dia Laboral"; break;}
    case 6:{ return "Es dia Laboral"; break;}
    case 7:{ return "Es fin de semana"; break;}  
 }


} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n===9){
    return true
  }
   else if(n>=90 && n <=99){
    return true;
  } else if(n>=900&&n<=999){
    return true
  }
  else{ return false }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let igual;
  
  for(let i=0; i<arreglo.length; i++){
   if(arreglo[i]===arreglo[i+1]){
     igual= true;
   }else{
     igual=false; 
   }
   if(igual===false){
     break;
   }
   return igual;
  }
  return igual;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  let nuevo =[];
  for(let i=0; i<array.length; i++){
      if(array[i]==="Enero"){
        nuevo.push(array[i]);
      }   
      if(array[i]==="Marzo"){
        nuevo.push(array[i]);
      }
      if(array[i]==="Noviembre"){
        nuevo.push(array[i])
      }
    }
    if(nuevo.includes("Enero") === true && nuevo.includes("Marzo") === true && nuevo.includes("Noviembre")===true){
       return nuevo
    }else{
      return "No se encontraron los meses pedidos"
    }

  }


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo=[];
    for(let i=0; i<array.length; i++){
      if(array[i]>100){
        nuevo.push(array[i])
      }
    }
   return nuevo
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevo=[];
  let contador=0;
  
  for(let i=0; i<10; i++){
    numero = numero + 2;
    nuevo.push(numero)
    if(contador===numero){
      break;
    }
  }
  if(nuevo.length!==10){
    return "Se interrumpió la ejecución"
  }else{return nuevo}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuev=[]
  let contador=0;
  
for(let i=0; i<10; i++){ 
  
  if(i===5){
    continue 
  }
  
   numero = numero +2;
   nuev.push(numero)
   
   contador++;
  }
   return nuev
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
