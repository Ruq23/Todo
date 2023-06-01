"use strict";
// console.log("Hello, I am Hungry!!!");
// console.log("Woooooo");
// function printDouble(msg: string): void {
//   console.log(msg);
//   console.log(msg);
// }
// printDouble("Hi, I am two");
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const done = document.getElementById("done");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
    //   console.log("SUBMITTED!!!!");
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    if (checkbox.checked) {
        newLi.append(todo.text);
        newLi.append(checkbox);
        done.append(newLi);
    }
    else {
        newLi.append(todo.text);
        newLi.append(checkbox);
        list.append(newLi);
    }
}
form.addEventListener("submit", handleSubmit);
// {
//   e.preventDefault();
//   console.log("Submitted");
// });
