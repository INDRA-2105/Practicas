const todos = [];

window.onload = () => {
  const formulario = document.getElementById("todo-form");
  const render = () => {
    const todoList = document.getElementById("todo-list");
    const todoTemplate = todos.map((t) => "<li>" + t + "</li>");

    todoList.innerHTML = todoTemplate.join("");

    const elemento = document.querySelectorAll("#todo-list li");
    elemento.forEach((elemento, i) => {
      elemento.addEventListener("click", () => {
        elemento.parentNode.removeChild(elemento);
        todos.splice(i, 1); //elimina el elemento splice
        render();
      });
    });
  };
  formulario.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    render();
  };
};
