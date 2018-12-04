//letiables used to manipulate DOM elements
let input = document.querySelector("input[type='text']");
let ul = document.querySelector("ul");
let container = document.querySelector("div");
let lists = document.querySelectorAll("li");
let spans = document.getElementsByTagName("span");
let addBtn = document.querySelector(".add");
let saveBtn = document.querySelector(".save");
let clearBtn = document.querySelector(".clear");

//This function deletes the todo if the delete span is clicked
function deleteTodo() {
  for (let span of spans) {
    span.addEventListener("click", function() {
      event.stopPropagation();
    });
  }
}

//This function loads the todo if a list is found in local storage
function loadTodo() {
  if (localStorage.getItem("todoList")) {
    ul.innerHTML = localStorage.getItem("todoList");
    deleteTodo();
  }
}

//This function adds user input to the todo list
addBtn.addEventListener("click", function() {
  // let li = document.createElement("li");
  // let spanElement = document.createElement("span");
  // let newTodo = this.input;
  // this.input = " ";
  // ul.appendChild(li).append(spanElement, newTodo);
  // let newTodo = input.value;
  // deleteTodo();
  let li = document.createElement("li");
  let spanElement = document.createElement("span");
  const input = document.querySelector("input");
  let newTodo = input.value;
  this.input = " ";
  ul.appendChild(li).append(spanElement, newTodo);
  deleteTodo();
});

//This event listener will add any new text to the list when the enter key is pressed
input.addEventListener("keypress", function(keyPressed) {
  if (keyPressed.which === 13) {
    let li = document.createElement("li");
    let spanElement = document.createElement("span");

    let newTodo = this.value;
    this.value = " ";

    ul.appendChild(li).append(spanElement, newTodo);

    deleteTodo();
  }
});

//This event listener changes the font decoration to linethrough when item is clicked
ul.addEventListener(
  "click",
  function(ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//This event listener will save the todolist state when the save button is clicked
saveBtn.addEventListener("click", function() {
  localStorage.setItem("todoList", ul.innerHTML);
});

//This event listener will clear the todolist when the clear button is clicked
clearBtn.addEventListener("click", function() {
  ul.innerHTML = "";
  localStorage.removeItem("todoList", ul.innerHTML);
});

//delete todo
deleteTodo();

//load Todo
loadTodo();
