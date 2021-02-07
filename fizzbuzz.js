/** 
 * 
    Escriba un script que a partir de un array de ints devuelva un array de strings aplicando las
    siguientes reglas:
    · Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
    · Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
    · Devuelve FizzBuzz si el número es divisible por 3 y por 5.
    · Puedes utilizar cualquier lenguaje que consideres apropiado.
 *
 */

const fizzBuzz = (input) => {
  return input.map((x) => {
    const divOrHas3 = x % 3 === 0 || `${x}`.includes(3);
    const divOrHas5 = x % 5 === 0 || `${x}`.includes(5);

    if (divOrHas3 && divOrHas5) return "FizzBuzz";
    else if (divOrHas3) return "Fizz";
    else if (divOrHas5) return "Buzz";
    else return x;
  });
};

module.exports = fizzBuzz;
