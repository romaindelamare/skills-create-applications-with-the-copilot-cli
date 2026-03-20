/**
 * Calculator core module
 * Supported operations:
 *  - Addition: + or add
 *  - Subtraction: - or sub
 *  - Multiplication: * or mul or x
 *  - Division: / or div
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
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = { parseNumber, addition, subtraction, multiplication, division, calculate };
