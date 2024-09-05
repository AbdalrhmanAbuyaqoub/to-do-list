let newTaskInput = document.querySelector("#new-item");
const addNewTask = document.querySelector(".add-button");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const tasks = document.querySelector(".tasks");

let newTaskText = "";

newTaskInput.addEventListener("input", function (event) {
  input(event.target.value);
});

addNewTask.addEventListener("click", function () {
  addButton();
});

function addButton() {
  console.log("button clicked");
  createTask();
}

function createTask() {
  if (newTaskText !== "") {
    const task = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskTextDiv = document.createElement("div");
    const deleteButton = document.createElement("button");

    deleteButton.innerHTML = "✕";
    deleteButton.className = "delete-button";
    task.appendChild(deleteButton);

    taskTextDiv.innerHTML = newTaskText;
    taskTextDiv.className = "task-text";
    task.appendChild(taskTextDiv);

    task.className = "task";
    tasks.prepend(task);

    checkbox.type = "checkbox";
    checkbox.name = "task-checkbox";
    checkbox.id = "task-checkbox";
    task.appendChild(checkbox);

    newTaskText = "";
    newTaskInput.value = "";
  }
}

function input(value) {
  newTaskText = value;
  console.log(newTaskText);
}
