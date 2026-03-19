#!/usr/bin/env node
/**
 * Simple CLI Calculator
 * Supported operations:
 *  - Addition: + or add
 *  - Subtraction: - or sub
 *  - Multiplication: * or mul or x
 *  - Division: / or div
 *
 * Usage:
 *  node src/index.js <operator> <number1> <number2>
 *  Examples:
 *    node src/index.js + 4 5
 *    node src/index.js add 4 5
 *
 * If no arguments are provided the script enters interactive mode.
 */

const readline = require('readline');

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

function printUsage() {
  console.log('Usage: node src/index.js <operator> <number1> <number2>');
  console.log('Operators: +, -, *, /  (also: add, sub, mul, div, x)');
}

function runFromArgs(argv) {
  if (argv.length < 3) {
    printUsage();
    return;
  }
  const op = argv[0];
  try {
    const a = parseNumber(argv[1]);
    const b = parseNumber(argv[2]);
    const result = calculate(op, a, b);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exitCode = 2;
  }
}

function runInteractive() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.setPrompt('calc> ');
  console.log('Simple CLI Calculator — type expressions like "2 + 3" or "add 2 3"');
  console.log('Type "exit" or Ctrl+C to quit.');
  rl.prompt();
  rl.on('line', (line) => {
    const trimmed = line.trim();
    if (trimmed === '' ) { rl.prompt(); return; }
    if (trimmed.toLowerCase() === 'exit') { rl.close(); return; }

    // Try to parse forms: "<num> <op> <num>" or "<op> <num> <num>"
    const parts = trimmed.split(/\s+/);
    try {
      let op, a, b;
      if (parts.length === 3 && /[+\-*/x]/.test(parts[1])) {
        // form: number op number
        a = parseNumber(parts[0]);
        op = parts[1];
        b = parseNumber(parts[2]);
      } else if (parts.length === 3) {
        // form: op number number  (e.g., add 2 3)
        op = parts[0];
        a = parseNumber(parts[1]);
        b = parseNumber(parts[2]);
      } else {
        throw new Error('Unrecognized input. Use "2 + 3" or "add 2 3"');
      }
      const result = calculate(op, a, b);
      console.log(result);
    } catch (err) {
      console.error('Error:', err.message);
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Goodbye');
    process.exit(0);
  });
}

// Entry point
const args = process.argv.slice(2);
if (args.length === 0) {
  runInteractive();
} else {
  runFromArgs(args);
}
