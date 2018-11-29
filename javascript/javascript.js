//Variables used to manipulate DOM elements
var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");


//This function deletes the todo if the delete span is clicked
function deleteTodo() {
    for (let span of spans) {
        span.addEventListener("click", function () {
            event.stopPropagation();
        });
    }
}

//This function loads the todo if a list is found in local storage
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todoList');
        deleteTodo();
    }
}

//This event listener will add any new text to the list when the enter key is pressed
input.addEventListener("keypress", function (keyPressed) {
    if (keyPressed.which === 13) {
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var newTodo = this.value;
        this.value = " ";
        ul.appendChild(li).append(spanElement, newTodo);
        deleteTodo();
    }
});

//This event listener changes the font decoration to linethrough when item is clicked
ul.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//This event listener will save the todolist state when the save button is clicked
saveBtn.addEventListener('click', function () {
    localStorage.setItem('todoList', ul.innerHTML);

});

//This event listener will clear the todolist when the clear button is clicked
clearBtn.addEventListener('click', function () {
    ul.innerHTML = "";
    localStorage.removeItem('todoList', ul.innerHTML);
});

//delete todo
deleteTodo();

//load Todo
loadTodo();