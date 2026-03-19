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

function calculate(op, a, b) {
  switch (op) {
    case '+': case 'add':
      return a + b;
    case '-': case 'sub':
      return a - b;
    case '*': case 'x': case 'mul':
      return a * b;
    case '/': case 'div':
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    default:
      throw new Error(`Unsupported operation: ${op}`);
  }
}

module.exports = { parseNumber, calculate };
