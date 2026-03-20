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

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function calculate(op, a, b) {
  switch (op) {
    case '+': case 'add':
      return add(a, b);
    case '-': case 'sub':
      return subtract(a, b);
    case '*': case 'x': case 'mul':
      return multiply(a, b);
    case '/': case 'div':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = { parseNumber, add, subtract, multiply, divide, calculate };
