let newTaskInput = document.querySelector("#new-item");
const addNewTask = document.querySelector(".add-button");
const header = document.querySelector(".header");
const tasks = document.querySelector(".tasks");

let newTaskText = "";

newTaskInput.addEventListener("input", function (event) {
  input(event.target.value);
});

newTaskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTask();
  }
});

addNewTask.addEventListener("click", function () {
  addButton();
});

function addButton() {
  console.log("button clicked");
  createTask();
}

tasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    console.log("delete clicked");
    event.target.parentElement.remove();
  }
});

tasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("task-checkbox")) {
    console.log("checked");
  }
});

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
