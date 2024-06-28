# To-Do List Application

This is a simple to-do list application that allows users to add and mark tasks as done. The application has a clean UI with a gradient background and animations.

## Features

- Add tasks with a title and description.
- Mark tasks as done.
- Smooth animations and hover effects.

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup

1. Clone the repository or download the files.
2. Open the `index.html` file in your web browser.

## Files

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The CSS file containing styles and animations.
- `script.js`: The JavaScript file containing the logic for adding and marking tasks as done.

## Usage

1. Enter the title and description of the task in the input fields.
2. Click the "ADD TO DO" button to add the task to the list.
3. Click the "mark as done" button next to a task to mark it as done.

## Example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>To-Do List</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <input id="title" type="text" placeholder="Title">
  <br />
  <input id="description" type="text" placeholder="Description">
  <br />
  <button id="button" onclick="add()">ADD TO DO</button>
  <br />
  <div id="container"></div>
  <script src="script.js"></script>
</body>
</html>
