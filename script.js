var index = 1;

function markAsDone(id) {
  var parent = document.getElementById("container").children[id - 1];
  parent.querySelector(".button").innerHTML = "Done";
}

function todo(title, description, index) {
  const parent = document.createElement("div");
  parent.setAttribute("class", "parent");
  parent.setAttribute("id", `parent-${index}`);

  const titleElement = document.createElement("h1");
  titleElement.setAttribute("class", "title");
  titleElement.innerHTML = `${title}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.setAttribute("class", "description");
  descriptionElement.innerHTML = `${description}`;

  const buttonElement = document.createElement("button");
  buttonElement.innerHTML = "mark as done";
  buttonElement.setAttribute("class", "button");
  buttonElement.setAttribute("onclick", `markAsDone(${index})`);

  parent.appendChild(titleElement);
  parent.appendChild(descriptionElement);
  parent.appendChild(buttonElement);

  return parent;
}

function add() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  document.getElementById("container").appendChild(todo(title, description, index));
  index++;
}
