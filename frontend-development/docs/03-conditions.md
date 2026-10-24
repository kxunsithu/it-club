# Topic 3: Conditions

Conditions let a program choose what to do based on whether something is true or false. They are the decision-making part of JavaScript.

## `if` Statement

Use `if` to run code only when a condition is `true`.

```javascript
const age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
```

The code inside the braces runs only when `age >= 18` is `true`. If the condition is `false`, JavaScript skips the block.

## `if...else`

Use `else` to run a different block when the condition is `false`.

```javascript
const score = 42;

if (score >= 50) {
    console.log("You passed.");
} else {
    console.log("You need more practice.");
}
```

Only one of the two blocks runs. The condition decides which one.

## `else if`

Use `else if` to check several conditions in order. JavaScript stops at the first condition that is `true`.

```javascript
const temperature = 30;

if (temperature >= 35) {
    console.log("It is very hot.");
} else if (temperature >= 25) {
    console.log("It is warm.");
} else if (temperature >= 15) {
    console.log("It is cool.");
} else {
    console.log("It is cold.");
}
```

If `temperature` is `30`, the second block runs and the rest are skipped. Always put the most specific or most restrictive condition first.

## Combine Conditions with Logical Operators

Use `&&` (AND), `||` (OR), and `!` (NOT) to build more detailed conditions. These operators are explained in the operators lesson.

```javascript
const hasTicket = true;
const hasId = true;
const age = 20;

if (hasTicket && hasId && age >= 18) {
    console.log("You may enter.");
} else {
    console.log("You may not enter.");
}
```

All three parts must be `true` because of `&&`. You can group parts with parentheses to make the meaning clear:

```javascript
if ((hasTicket && hasId) || isStaff) {
    console.log("Access granted.");
}
```

## Nested Conditions

You can put an `if` statement inside another `if` statement. This is called nesting.

```javascript
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome, admin.");
    } else {
        console.log("Welcome, user.");
    }
} else {
    console.log("Please log in.");
}
```

Nesting works, but too many levels make code hard to read. When possible, combine conditions with `&&` or `||`, or use early returns in functions.

## Ternary Operator

The ternary operator is a short way to choose between two values based on a condition. It uses `?` and `:`.

```javascript
const age = 16;
const status = age >= 18 ? "adult" : "minor";

console.log(status); // "minor"
```

This is useful for simple choices. For more complex logic, use `if...else` so the code stays readable.

## `switch` Statement

Use `switch` when you want to compare one value against several possible values. It can be easier to read than a long `if...else if` chain.

```javascript
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("Almost the weekend.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("A regular day.");
}
```

Each `case` checks for strict equality (`===`) with `day`. The `break` statement stops the `switch` after a match. Without `break`, JavaScript continues into the next case, which is called fall-through. The `default` case runs when no case matches.

## Truthy and Falsy Values

In a condition, JavaScript converts a value to a Boolean. Some values are treated as `false` even though they are not the Boolean `false`. These are called falsy values:

- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy, including non-empty strings, numbers other than `0`, arrays, and objects.

```javascript
const username = "";

if (username) {
    console.log("Hello, " + username);
} else {
    console.log("No username provided.");
}
```

Because `""` is falsy, the `else` block runs. Be careful: a value such as `0` or an empty string may be a valid value, not an error. When the exact value matters, compare explicitly:

```javascript
if (username !== "") {
    console.log("A username was entered.");
}
```

## Common Mistakes

- Using `=` (assignment) instead of `===` (comparison) inside a condition.
- Forgetting braces and accidentally running only the first statement.
- Writing conditions in an order that hides a more specific case.
- Relying on truthiness when an explicit comparison would be clearer.

## Practice

1. Create a variable `score` and print `"Pass"` if it is at least 50, otherwise print `"Fail"`.
2. Use `else if` to print a grade: 80 or above is `"A"`, 60 or above is `"B"`, 40 or above is `"C"`, otherwise `"F"`.
3. Use a ternary operator to set a variable `access` to `"allowed"` or `"denied"` based on whether `age` is at least 18.
4. Use `switch` to print a message for the values `"red"`, `"yellow"`, and `"green"`, plus a default message.
5. Test the values `0`, `""`, `"hello"`, and `null` in `if` statements and observe which ones are truthy or falsy.

Use `===` and `!==` for comparisons so both value and type are checked.