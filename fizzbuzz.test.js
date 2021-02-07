const fizzbuzz = require("./fizzbuzz");

test("Test Fizz", () => {
  expect(fizzbuzz([3, 32])).toEqual(["Fizz", "Fizz"]);
});

test("Test Buzz", () => {
  expect(fizzbuzz([5, 58])).toEqual(["Buzz", "Buzz"]);
});

test("Test FizzBuzz", () => {
  expect(fizzbuzz([15, 53])).toEqual(["FizzBuzz", "FizzBuzz"]);
});
