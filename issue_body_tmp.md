## Feature Description

Request to add a basic Node.js CLI calculator implemented in calculator.js that supports the following arithmetic operations:

- addition
- subtraction
- multiplication
- division

The calculator should be simple, well-documented, and include example usage.

## Use Case

Provide a lightweight command-line tool for quick arithmetic calculations without opening a full REPL or external calculator application. Useful for scripting, CI quick checks, and developer convenience.

## Proposed Solution

Implement a Node.js CLI program in calculator.js that:

- Accepts input via command-line arguments (e.g., `node calculator.js add 2 3`) or flags (e.g., `--operation add --a 2 --b 3`).
- Supports the four operations: addition, subtraction, multiplication, and division.
- Validates numeric input and handles division-by-zero gracefully with a clear error message and non-zero exit code.
- Includes a brief README section showing usage examples and expected output.

## Additional Context

Place the implementation at `calculator.js` in the repository root. Keep the dependency footprint minimal (prefer no external dependencies if possible). Include tests or example invocations if convenient.
