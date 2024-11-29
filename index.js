const todos = [];

window.onload = () => {
  const fomrulario = document.getElementById("todo-form");
  const render = () => {
    const todoList = document.getElementById("todo-list");
    const templateTodos = todos.map((t) => "<li>" + t + "</li>");
    todoList.innerHTML = templateTodos.join("");
    const elementos = document.querySelectorAll("#todo-list li");
    elementos.forEach((elemento, i) => {
      elemento.addEventListener("click", () => {
        elemento.parentNode.removeChild(elemento);
        todos.splice(i, 1);
        render();
      });
    });
  };
  fomrulario.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    todos.push(todoText);
    render();
  };
};
