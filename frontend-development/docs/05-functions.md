# Topic 5: Functions

A function is a reusable block of code. You can give it information to work with, run its code when needed, and get a result back.

## Function Declaration

Use the `function` keyword to declare a function. The code inside the function runs when you call it by its name.

```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();
```

Declaring a function does not run it. `sayHello()` is the function call that runs its body.

## Parameters and Arguments

Parameters are named inputs in a function definition. Arguments are the values you pass in when you call the function.

```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Mina");
greet("Ko Aung");
```

Here, `name` is a parameter. `"Mina"` and `"Ko Aung"` are arguments.

## Return a Value

Use `return` to send a result back from a function. You can store that result or use it in another expression.

```javascript
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const sum = add(4, 6);
console.log(sum); // 10
```

`return` ends the function call and gives its value back to the code that called it. If a function does not return a value, its result is `undefined`.

## Arrow Functions

Arrow functions are another way to write functions. They are often assigned to a `const` variable.

```javascript
const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

console.log(multiply(3, 4)); // 12
```

For a one-line function that returns an expression, you can omit the braces and `return`:

```javascript
const double = number => number * 2;

console.log(double(5)); // 10
```

## Why Use Functions?

Functions help you:

- Reuse code without writing it repeatedly.
- Give a task a clear name, such as `calculateTotal`.
- Break a larger problem into smaller steps.

## Practice

1. Write a function named `subtract` that accepts two numbers and returns the first minus the second.
2. Call it with two different pairs of numbers and print both results.
3. Write an arrow function named `isAdult` that accepts an age and returns whether it is at least 18.

Use a `return` value when you want the function's result to be used elsewhere. Use `console.log()` when you only want to display something in the console.