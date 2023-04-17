


const precioCuota = 11500;


const limitePersonas = 6;


const noDiscount = 1;
const descuentoUno = (1 - 0.10);
const descuentoDos = (1 - 0.20);
const decuentoTres = (1 - 0.35);


const tax = 1;



alert("Bienvenido a VIKEN GYM, Nos alegra que quieras asociarte");



/*let nameEntered = prompt("Por favor, ingresa tu nombre:");

alert(`Hola ${nameEntered}, es un gusto!`);*/

let nombre = prompt("Ingrese su nombre");

function saludar(nombre) {
  var regex = new RegExp('^[A-Z]+$', 'i')
  while (nombre == null || nombre == ""){ 
    nombre = prompt("Por favor ingrese su nombre: ");}

  if ( regex.test(nombre) ) {
    alert(`Hola ${nombre}, buenos dias`)
  }
    else {
    nombre = prompt('Ingrese un nombre valido') 
  }
}

saludar(nombre);

alert(`El precio de la cuota mensual es de $11500. 
  
Pero tambien hay descuentos
plan pareja 10% de descuento cada uno
plan familiar 20% de descuento cada uno (hasta 6) `);



let cantidadPersonas = parseInt(prompt("Cuantos quisieran asociarse?"));
while (cantidadPersonas == null || /\D/.test(cantidadPersonas) || cantidadPersonas == ""){ 
  cantidadPersonas = prompt("Por favor ingrese la cantidad de personas: ");}

 if (cantidadPersonas > limitePersonas  ) { 
    alert(`Error, el limite de personas es de 6`);
    cantidadPersonas = prompt("Ingrese la cantidad de personas menor a 6:");
  }



 else {
 
function priceCalculator(cantidadPersonas, precioCuota, noDiscount, descuentoUno, descuentoDos, decuentoTres, tax) {
  if (cantidadPersonas > 0 && cantidadPersonas <= 1) {
    let finalPrice = (cantidadPersonas * precioCuota * noDiscount * tax)
    return finalPrice.toFixed(2);
  }
  else if (cantidadPersonas >= 2 && cantidadPersonas < 3) {
    let finalPrice = (cantidadPersonas * precioCuota * descuentoUno * tax)
    return finalPrice.toFixed(2);
  }
  else if (cantidadPersonas >= 3 && cantidadPersonas <= 6) {
    let finalPrice = (cantidadPersonas * precioCuota * descuentoDos * tax)
    return finalPrice.toFixed(2);
  }
}
/*  else (cantidadPersonas == null || /\D/.test(cantidadPersonas) || cantidadPersonas == "")
{
  cantidadPersonas = prompt("Por favor ingrese la cantidad de personas: ");
  }*/

  alert("El total del precio final  es de: $" + priceCalculator(cantidadPersonas, precioCuota, noDiscount, descuentoUno, descuentoDos, decuentoTres, tax));






let numero = prompt("Si usted desea continuar con la asociacion, ingrese su numero: ");
    
while (numero == null || /\D/.test(numero) || numero == "") {
    numero = prompt("Entre un número VÁLIDO: ");
};
console.log (numero);

alert("Gracias por tu visita! en breve nos estaremos comunicando con usted, que tenga buen dia.");}