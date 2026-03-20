/**
 * Calculator core module
 * Supported operations:
 *  - Addition: + or add
 *  - Subtraction: - or sub
 *  - Multiplication: * or mul or x
 *  - Division: / or div
 *  - Modulo: % or mod
 *  - Exponentiation: ^ or pow
 *  - Square root: sqrt
 */

function parseNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${value}`);
  return n;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

function calculate(op, a, b) {
  switch (op) {
    case '+': case 'add':
      return addition(a, b);
    case '-': case 'sub':
      return subtraction(a, b);
    case '*': case 'x': case 'mul':
      return multiplication(a, b);
    case '/': case 'div':
      return division(a, b);
    case '%': case 'mod':
      return modulo(a, b);
    case '^': case 'pow':
      return power(a, b);
    case 'sqrt':
      return squareRoot(a);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = { parseNumber, addition, subtraction, multiplication, division, modulo, power, squareRoot, calculate };
