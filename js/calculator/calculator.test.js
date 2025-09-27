const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

/** Tarea 1: */
describe ("Probando la función divide()",()=>{
  test("Probando que 8/2 da 4",()=>{
    expect(calculator.divide(8,2)).toBe(4);
  })
  test("Probando que -18/9 da -2",()=>{
    expect(calculator.divide(-18,9)).toBe(-2);
  })
})
describe ("Probando la función multiply()",()=>{
  test("Probando que 8*2 da 16",()=>{
    expect(calculator.multiply(8,2)).toBe(16);
  })
  test("Probando que -8*9 da -72",()=>{
    expect(calculator.multiply(-8,9)).toBe(-72);
  })
})
/** Tarea 3: */
describe ("Probando la función dividir()",()=>{
  test("Probando que 16/2 da 8",()=>{
    expect(calculator.dividir(16,2)).toBe(8);
  })
  test("Probando que 20/0 da No es posible dividir entre cero, intente de nuevo modificando el denominador",()=>{
    expect(calculator.dividir(20,0)).toBe("No es posible dividir entre cero, intente de nuevo modificando el denominador");
  })
})
