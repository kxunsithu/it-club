# Vanilla JavaScript: A Beginner-Friendly Guide

Vanilla JavaScript is plain JavaScript used without frameworks or libraries such as React, Vue, or Angular. Together with HTML and CSS, it makes websites interactive.

This guide introduces the fundamentals of front-end JavaScript.

## What Is a Programming Language?

A programming language is a way for people to write instructions that a computer can follow. We use its rules and words to tell a computer what to do, such as showing a message, calculating a total, or responding to a button click. JavaScript is one programming language, and it is commonly used to make websites interactive.

## 1. What Is JavaScript?

JavaScript is a programming language used to make websites interactive. It can help you:

- Display a message when someone clicks a button.
- Validate a form before it is submitted.
- Show and hide page elements.
- Create image sliders and dropdown menus.
- Fetch data from APIs.
- Perform CRUD operations: create, read, update, and delete data.

## 2. HTML, CSS, and JavaScript

| Technology | Role | What it does |
| --- | --- | --- |
| HTML | **Structure** | Defines page content, such as headings, paragraphs, and buttons. |
| CSS | **Styling** | Controls colors, layouts, fonts, spacing, and responsive design. |
| JavaScript | **Behavior** | Responds to user actions and works with data. |

<p>
    <img src="https://images.openai.com/static-rsc-4/GNBha2vzTCUIj0wsBkJC7pS5-VYYsJbImxvhljyjO-jCPm6Cg3tdIvlydhY6DKZTjA8xluquAqtyCuA6luziv7APOPIwH1cUwnWHQjTN_tPl3rCN1L5PiNTVTJ607X5t9BmGuT-pZtq2Dj1fFkq1q8DXT6IFCPMtMKfxXsTxhhU?purpose=inline" alt="HTML5 logo" width="100">
    <img src="https://images.openai.com/static-rsc-4/2MK3wvo41L0TqnyB_4dXtB__7ByYTDVzc_MxMXeZqrv2RuXuHrxTN7eNgAtgi5butKk_L5w2i8j-x0HsTh76g6rGt32a0zzLV-7JCy6X-LJ75Q8dQUmNdMT2prjsNCX-5OxqExjFvKdpVvn8agk5oEm0iOEJvd71HF_a1LRm6cQ?purpose=inline" alt="CSS3 logo" width="100">
    <img src="https://images.openai.com/static-rsc-4/tr6qZTUAn1whOfn0lXCVxhJFmyIYZXNtsFIA9qUaP24t1AZpVWRnxIhyvCLzzinoDuzy5ewSmCe_xtQgWpGRI6qCXGVf3_Qec9yjTvLG3eGny9looSH04-Iqbs7Q73TzXtYEuyNiilBOXZI6rmd7yutxo8_o1Vzgddp9dLfTXk8?purpose=inline" alt="JavaScript logo" width="100">
</p>

For example, on a login page:

- HTML creates the username and password fields.
- CSS styles the page.
- JavaScript checks the input and responds when someone clicks **Log in**.

## 3. Set Up Your First JavaScript Project

You need a code editor, such as VS Code, and a web browser. Create a folder named `vanilla-js-learning` with these files:

```text
vanilla-js-learning/
├── index.html
├── style.css
└── script.js
```

### Step 1: Create `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Learning</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Learn Vanilla JavaScript</h1>
    <p id="message">Hello, Student!</p>
    <button id="changeButton">Click Me</button>
</body>
</html>
```

### Step 2: Create `style.css`

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 80px;
}

button {
    padding: 10px 20px;
    cursor: pointer;
}
```

### Step 3: Create `script.js`

```javascript
const button = document.getElementById("changeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "You have learned your first JavaScript interaction!";
});
```

### Step 4: Run the project

1. Open the project folder in VS Code.
2. Open `index.html` in your browser, or use the Live Server extension.
3. Click **Click Me**.
4. Notice that the paragraph changes.

**What did you learn?** JavaScript can select HTML elements, listen for events, and change page content without reloading the page.

## 4. Essential JavaScript Topics

Learn these topics in order. Understand the fundamentals before moving on to API integration.

1. **Variables and data types:** Store information with `let` and `const`. Learn strings, numbers, booleans, `null`, and `undefined`. [Read the lesson](01-variables-and-data-types.md).
2. **Operators:** Use arithmetic, comparison, logical, and assignment operators. [Read the lesson](02-operators.md).
3. **Conditions:** Make decisions with `if`, `else if`, `else`, and `switch`. [Read the lesson](03-conditions.md).
4. **Loops:** Repeat operations with `for`, `while`, and `for...of`. [Read the lesson](04-loops.md).
5. **Functions:** Create reusable code with function declarations and arrow functions. [Read the lesson](05-functions.md).
6. **Arrays and objects:** Store collections of data and represent real-world entities.
7. **DOM manipulation:** Select HTML elements and update text, styles, attributes, and classes.
8. **Events:** Handle clicks, typing, form submissions, and other user interactions.
9. **Form validation:** Check user input and display helpful error messages.
10. **Modern JavaScript:** Learn template literals, destructuring, spread syntax, and modules.
11. **Asynchronous JavaScript:** Learn callbacks, Promises, `async`/`await`, and error handling.
12. **API integration:** Use `fetch()` to retrieve and send JSON data to a backend API.
