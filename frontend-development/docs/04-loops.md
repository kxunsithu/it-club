# Topic 4: Loops

Loops repeat code. They are useful for counting, processing collections of data, and repeating work until a condition changes.

## `for` Loop

Use a `for` loop when you know how many times to repeat something or need a counter. It has three parts: a starting value, a condition, and an update.

```javascript
for (let count = 1; count <= 5; count++) {
    console.log(count);
}
```

This starts `count` at `1`, repeats while `count <= 5`, and adds `1` after each repetition. It prints the numbers 1 through 5. The `count++` expression is a shorthand for `count = count + 1`.

## `while` Loop

Use a `while` loop when you want to repeat code as long as a condition is true. The condition is checked before each repetition, so the loop might run zero times.

```javascript
let countdown = 3;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

console.log("Go!");
```

The loop stops when `countdown` reaches `0`. Without `countdown--`, the condition would stay true and the loop would never end. This is called an infinite loop.

## `do...while` Loop

A `do...while` loop checks its condition after running the code. This means its body always runs at least once.

```javascript
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 3);
```

Use `do...while` when the code should run once before deciding whether to repeat it.

## `for...of` Loop

Use `for...of` to go through values in an array, string, or another iterable collection.

```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}
```

Each repetition puts the next array value into `color`.

## `for...in` Loop

Use `for...in` to go through the enumerable property names (keys) of an object.

```javascript
const student = {
    name: "Mina",
    grade: 10
};

for (const key in student) {
    console.log(key, student[key]);
}
```

This prints each key and its value. For arrays, prefer `for...of` because `for...in` gives property names such as index strings, rather than the values.

## Array `forEach()` Method

Arrays have a `forEach()` method that runs a function once for each item. It is an array method, not a loop statement, but it is another common way to repeat an action over an array.

```javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function (fruit) {
    console.log(fruit);
});
```

Use `forEach()` for an action on every item. Use `for...of` when you need to stop early with `break`, skip an item with `continue`, or use `await` in the loop body.

## `break` and `continue`

Use `break` to exit a loop immediately. Use `continue` to skip the rest of the current repetition and move to the next one.

```javascript
for (let number = 1; number <= 5; number++) {
    if (number === 2) {
        continue;
    }

    if (number === 4) {
        break;
    }

    console.log(number);
}
```

This prints `1` and `3`: `2` is skipped, then the loop ends when it reaches `4`.

## Choose a Loop

- Use `for` when you need a counter or know how many repetitions you want.
- Use `while` when repetition depends on a condition checked before each run.
- Use `do...while` when the body must run at least once.
- Use `for...of` to process values in arrays, strings, and other iterable collections.
- Use `for...in` to process keys in an object.
- Use array `forEach()` for a simple action on every array item.

## Practice

1. Write a `for` loop that prints the even numbers from 2 through 10.
2. Create an array of three favorite foods and print each one with both `for...of` and `forEach()`.
3. Make a `while` loop count down from 5 to 1, then print `"Done!"`.
4. Create an object describing a book and use `for...in` to print each key and value.
5. Use `do...while` to print the numbers 1 through 3.

Check that every `while` and `do...while` loop updates its condition so it will eventually stop.