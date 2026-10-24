# Topic 2: Operators

Operators are symbols or keywords that tell JavaScript to perform an operation. They can calculate numbers, compare values, or combine conditions.

## Arithmetic Operators

Arithmetic operators perform calculations with numbers.

| Operator | Example | Result |
| --- | --- | --- |
| `+` | `8 + 3` | `11` |
| `-` | `8 - 3` | `5` |
| `*` | `8 * 3` | `24` |
| `/` | `8 / 2` | `4` |
| `%` | `8 % 3` | `2`, the remainder |
| `**` | `2 ** 3` | `8`, or 2 to the power of 3 |

```javascript
const itemPrice = 8;
const itemCount = 3;
const totalPrice = itemPrice * itemCount;

console.log(totalPrice); // 24
console.log(10 % 3); // 1
```

The `+` operator can also join strings:

```javascript
const firstName = "Mina";
const greeting = "Hello, " + firstName + "!";

console.log(greeting); // "Hello, Mina!"
```

When you want to include a variable in a string, a template literal is often easier to read:

```javascript
const greeting = `Hello, ${firstName}!`;
```

## Assignment Operators

Assignment operators put a value into a variable or update its current value.

```javascript
let score = 10; // Assign 10 to score
score += 5; // Same as: score = score + 5
score -= 2; // Same as: score = score - 2
score *= 2; // Same as: score = score * 2

console.log(score); // 26
```

Use `=` to assign a value. It does not mean “is equal to” when comparing values; use `===` for that.

## Comparison Operators

Comparison operators compare two values and produce a Boolean: `true` or `false`.

| Operator | Meaning | Example result |
| --- | --- | --- |
| `===` | Strictly equal | `5 === 5` is `true` |
| `!==` | Not strictly equal | `5 !== "5"` is `true` |
| `>` | Greater than | `8 > 3` is `true` |
| `<` | Less than | `2 < 3` is `true` |
| `>=` | Greater than or equal to | `5 >= 5` is `true` |
| `<=` | Less than or equal to | `4 <= 3` is `false` |

Prefer `===` and `!==` because they compare both the value and its type.

```javascript
console.log(5 === 5); // true
console.log(5 === "5"); // false: number and string are different types
console.log(5 !== "5"); // true
```

## Logical Operators

Logical operators combine or reverse Boolean values. They are often used to check more than one condition.

| Operator | Meaning | Example |
| --- | --- | --- |
| `&&` | AND: both conditions must be true | `hasTicket && hasId` |
| `\|\|` | OR: at least one condition must be true | `isWeekend \|\| isHoliday` |
| `!` | NOT: reverses a Boolean value | `!isLocked` |

```javascript
const hasTicket = true;
const hasId = true;
const canEnter = hasTicket && hasId;

console.log(canEnter); // true
console.log(!hasTicket); // false
```

## Order of Operations

JavaScript follows an order when an expression contains multiple operators. Use parentheses to make the intended order clear.

```javascript
const total = 2 + 3 * 4;
const totalWithParentheses = (2 + 3) * 4;

console.log(total); // 14: multiplication happens first
console.log(totalWithParentheses); // 20: parentheses happen first
```

## Practice

Create variables for the price of one notebook and the number of notebooks you want to buy. Calculate the total, then use a comparison to check whether the total is less than or equal to 20. Print both results with `console.log()`.

Try changing the number of notebooks and observe how the results change.