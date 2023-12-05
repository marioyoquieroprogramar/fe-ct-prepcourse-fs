/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arrayIncrementado = [];
   for (var i = 0; i < array.length; i++) {
      arrayIncrementado.push(array[i] + 1)
   }
   return arrayIncrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;

   for (i = 0; i < arrayOfNums.length; i++) {
      suma = suma + arrayOfNums[i];

   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   var notas = 0;
   for (i = 0; i < resultadosTest.length; i++) {
      notas = notas + resultadosTest[i];
   }
   return (notas / resultadosTest.length);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var grande = 0;
   for (i = 0; i < arrayOfNums.length; i++) {
      if (grande < arrayOfNums[i]) {
         grande = arrayOfNums[i];
      }
   } return grande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   contador = 1;
   if (arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0];
   } else {
      for (i = 0; i < arguments.length; i++) {
         contador = contador * arguments[i];
      }
   }
   return contador;
}
// array       = [0,18,5,12,25]
// indices        0 1  2  3  4
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   contador = 0;
   for (i = 0; i < array.length; i++) {
if (array[i] > 18) {
   contador = contador + 1;
}
   }
   return contador;
}
// 1 o 7 retorna "Es fin de semana"  2 a 6 retorna "Es dia laboral"
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return 'Es fin de semana';
   } else {
      return 'Es dia laboral';
   }
}
// 
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   str = 0;
   for (i = 0; i < num.toString.length; i++) {
      if (num.toString()[0] === '9') {
         str = true;
      } else {
         str = false;
      }
   }
return str;
}
// array    = [1,5,4,7,2]
// indice      0 1 2 3 4
function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   comparar = 0;
   for (i = 0; i < array.length - 1; i++) {
if (array[0] === array[i+1] ) {
   comparar = true;
} else {
   
   comparar = false;
}
   }
   return comparar;
}
// array   =  ['Abril','Noviembre','Febrero','Mayo','Enero','Marzo','Junio'];
//indice         0       1            2        3      4         5       6    
function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
    var mesesPedidos = [];
   
   for (var i = 0; i < array.length; i++) {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
         mesesPedidos.push(array[i]);
         
      } 
   } 
   
   if (mesesPedidos.length === 3) {
      return mesesPedidos;
   } else {
      return 'No se encontraron los meses pedidos';
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   resultadosTabla = [0];
   for (var i = 1; i < 11 ; i++) {
      multiplica = i * 6;
      resultadosTabla.push(multiplica);
      multiplica = 0;

   }
   return resultadosTabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
    var mayoresACien = [];
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         mayoresACien.push(array[i]);
      }
   }
   return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [];
   var count = num;
   for (var i = 0; i < 10; i++) {
count = count + 2;
if (i !== count) {
   array.push(count);
} else { 
   
   break;
}
   }
   
   if (array.length < 10) {
      return 'Se interrumpió la ejecución';
   } else {
      return array;
   }

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [];
   count = num;
   for (var i = 0 ; i < 10; i++) {
      if (i === 5){
         continue      
   } else {
      count = count + 2;
      array.push(count);
   }
}
return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
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
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
