const calc = require('./index');



try {
  let sumTest = calc.sum(2,2);

  if (sumTest != 4) {
    throw new Error("A soma de 2 + 2 está errada, valor: " + sumTest);
  }

  //Caso de test
  let subTest = calc.sub(2,2);
  if (subTest != 0) {
    throw new Error("A subtração de 2 - 2 está errada, valor: " + subTest);
  }

  let multTest = calc.mult(2,3);
  if (multTest != 6) {
    throw new Error("A multiplicação de 2 * 2 está errada, valor: " + multTest);
  }

  let divTest = calc.div(6,2);
  if (divTest != 3) {
    throw new Error("A divisão de 6 / 2 está errada, valor: " + divTest);
  }
  
  
} catch (e) {
  throw e.message;
  
}