// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];

  for (const propiedad in objeto) {
    matriz.push([propiedad, objeto[propiedad]]);
  }

  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  let array = string.split("");
  let longitud = array.length;
  let objeto = {};

  for (let i = 0; i < longitud; i++) {
    let cont = 1;
    if (!objeto.hasOwnProperty(array[i])) {
      objeto[array[i]] = cont;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          objeto[array[i]] = cont++;
        }
      }
    }
  }

  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minusculas = "";
  let mayusculas = "";

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      minusculas += s[i];
    } else {
      mayusculas += s[i];
    }
  }

  let stringFinal = mayusculas + minusculas;

  return stringFinal;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(" ");
  let stringReverse = "";

  for (let i = 0; i < array.length; i++) {
    let iterator = array[i].length - 1;
    for (let j = iterator; j >= 0; j--) {
      stringReverse += array[i][j];
    }
    if (i < array.length - 1) {
      stringReverse += " ";
    }
  }

  return stringReverse;
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let enteroAString = numero + "";
  let stringReverse = enteroAString.split("").reverse().join("");

  return enteroAString === stringReverse ? "Es capicua" : "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaEnArray = cadena.split("");
  let cadenaModificada = "";

  cadenaEnArray.forEach((element) => {
    if (element !== "a" && element !== "b" && element !== "c") {
      cadenaModificada += element;
    }
  });

  return cadenaModificada;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  if (arr.length < 1) {
    return [];
  }

  let menorQuePivot = [];
  let mayorQuePivot = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < pivot.length) {
      menorQuePivot.push(arr[i]);
    } else {
      mayorQuePivot.push(arr[i]);
    }
  }

  return [].concat(sortArray(menorQuePivot), pivot, sortArray(mayorQuePivot));
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let newArreglo = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (
        arreglo1[i] === arreglo2[j] &&
        arreglo1[i] !== newArreglo[newArreglo.length - 1]
      ) {
        newArreglo.push(arreglo1[i]);
      }
    }
  }

  return newArreglo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
