const { parseNumber, calculate } = require('../calc');

describe('Calculator core', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calculate('+', 2, 3)).toBe(5);
    expect(calculate('add', 2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calculate('-', 10, 4)).toBe(6);
    expect(calculate('sub', 10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calculate('*', 45, 2)).toBe(90);
    expect(calculate('mul', 45, 2)).toBe(90);
    expect(calculate('x', 45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calculate('/', 20, 5)).toBe(4);
    expect(calculate('div', 20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calculate('/', 1, 0)).toThrow('Division by zero');
    expect(() => calculate('div', 1, 0)).toThrow('Division by zero');
  });

  test('parseNumber throws on invalid input', () => {
    expect(() => parseNumber('abc')).toThrow('Invalid number');
  });
});
