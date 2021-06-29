//ejercicio 2

var suma = prompt("Ingresa un número mayor a 0")
var suma2 = prompt("Ingresa un número mayor a 0")

var sumaQty1 = Number.parseInt(suma)
var sumaQty2 = Number.parseInt(suma2)

console.log(suma)
console.log(suma2)


//se suman las variables y el resultado se guarda en una nueva

var resultadoSuma = sumaQty1 + sumaQty2;
console.log(resultadoSuma)

var resultadoResta = sumaQty1 - sumaQty2;
console.log(resultadoResta)

var resultadoMultiplicacion = sumaQty1 * sumaQty2;
console.log(resultadoMultiplicacion)

var resultadoDivision = sumaQty1 / sumaQty2;
console.log(resultadoDivision)



//ejercicio 3
//Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
//que la transforme a grados Kelvin y Fahrenheit.


var grados = prompt("Ingresa una temperatura")

var gardosQty = Number.parseInt(grados)

//covertir  en Kelvin
var kelvin = 273.15
var convertir = gardosQty + kelvin;

console.log(convertir)


////
var grados2 = prompt("Ingresa una temperatura")

var gardosQtyF = Number.parseInt(grados2)

//convertir en Fahrenheit

var fahrenheit = 32


var convertirFa = gardosQtyF * 9 / 5 + 32

console.log(convertirFa)



// ejercicio 4
const años = 365;
const semanas = 7;

var dias = prompt("escriba un número de dias");

var resultado2 = parseInt(dias) / años;
console.log(Math.floor(resultado2));
document.write(Math.floor(resultado2));
document.write("años")

var restante = parseInt(dias - años);
console.log(restante)

var semana = restante / semanas
console.log(semana);
document.write(Math.floor(semana));
document.write("semanas")

var semanasResultado = Math.floor(semana) * semanas;
console.log(semanasResultado);

var diasrestantes = restante - semanasResultado;
console.log(diasrestantes);
document.write(Math.floor(diasrestantes));
document.write("dias")


//console.log(parseInt(dias) / años);


// 5. suma total y promedio
var numero1 = prompt("escriba 1 numero");
var numero2 = prompt("escriba 1 numero");
var numero3 = prompt("escriba 1 numero");
var numero4 = prompt("escriba 1 numero");
var numero5 = prompt("escriba 1 numero");

var numero1Qty = Number.parseInt(numero1)
var numero2Qty = Number.parseInt(numero2)
var numero3Qty = Number.parseInt(numero3)
var numero4Qty = Number.parseInt(numero4)
var numero5Qty = Number.parseInt(numero5)


var sumaTotal = numero1Qty + numero2Qty + numero3Qty + numero4Qty + numero5Qty

var promedio = sumaTotal / 5


console.log("la suma es : " + sumaTotal)
console.log("el promerdio es : " + promedio)

