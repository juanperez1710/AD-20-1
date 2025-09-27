const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  return a / b;
}

function multiply(a, b){
  return a * b;
}

function dividir(a,b){
  if(b===0){
    return "No es posible dividir entre cero, intente de nuevo modificando el denominador";
  } else{
    return a/b;
  }
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply:multiply, dividir:dividir};