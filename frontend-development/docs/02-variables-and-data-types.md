# Topic 1: Variables and Data Types

Variables let a program remember information so it can use that information later. A variable has a name and holds a value.

```javascript
const learnerName = "Mina";
let lessonsCompleted = 0;

lessonsCompleted = 1;

console.log(learnerName);
console.log(lessonsCompleted);
```

Here, `learnerName` stores text, and `lessonsCompleted` stores a number. The `console.log()` function prints each value in the browser's developer console or in Node.js.

## Declare Variables with `const` and `let`

Use `const` when you do not plan to assign a different value to the variable. Use `let` when the value needs to change.

```javascript
const schoolName = "Northside School";
let score = 10;

score = 15;
```

You can change the value of `score` because it was declared with `let`. You cannot assign a new value to `schoolName` because it was declared with `const`. As a beginner rule, start with `const` and use `let` when you need reassignment.

## Choose Clear Variable Names

Good variable names describe the information they hold. JavaScript names are case-sensitive, and camelCase is commonly used for names with multiple words.

```javascript
const firstName = "Mina";
let shoppingCartTotal = 24.5;
```

Names can contain letters, numbers, `_`, and `$`, but cannot start with a number. Avoid reserved JavaScript words such as `const` and `if` as names.

## Common Data Types

A data type describes the kind of value a variable holds.

| Type | Example | Meaning |
| --- | --- | --- |
| String | `"Hello"` | Text inside quotes. |
| Number | `42` or `3.14` | A whole number or a decimal. |
| Boolean | `true` or `false` | A yes/no or on/off value. |
| Undefined | `undefined` | A variable has been declared but has not been given a value. |
| Null | `null` | An intentionally empty value. |

```javascript
const greeting = "Hello, class!";
const numberOfStudents = 20;
const isLessonFinished = false;
let nextTopic;
const selectedTopic = null;
```

In this example, `nextTopic` is `undefined` because it has not been assigned a value. `selectedTopic` is `null` because it has deliberately been set to mean “no topic selected.”

JavaScript can report a value's type with `typeof`:

```javascript
console.log(typeof greeting); // "string"
console.log(typeof numberOfStudents); // "number"
console.log(typeof isLessonFinished); // "boolean"
console.log(typeof nextTopic); // "undefined"
```

One unusual detail: `typeof null` returns `"object"` for historical reasons. Even so, `null` is used to represent an intentionally empty value.

## Practice

Create variables for a book's title, page count, whether you have finished reading it, and the date you plan to start. Choose suitable values and use `console.log()` to display them.

Remember: use `const` if you will not reassign a variable, and use `let` if its value needs to change.