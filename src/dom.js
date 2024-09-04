export default function displayTodos(todos) {
  const todoDisplay = document.querySelector('#rightColumn');

  for (const todo of todos) {
    let newTodo = document.createElement('div');
    newTodo.textContent = todo.display();
    newTodo.classList.add('todo');
    todoDisplay.appendChild(newTodo);
  }
}