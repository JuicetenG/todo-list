import actions from './actions.js';

const dom  = (() => {
  const addTaskBtn = document.querySelector("#addTodo");

  function displayTodos() {
    const todoDisplay = document.querySelector('#rightColumn');
    todoDisplay.textContent = '';
    let current = actions.getCurrentProject();
    let currentTodos = current.todos;
    for (const todo of currentTodos) {
      let newTodo = document.createElement('div');
      newTodo.textContent = todo.display();
      newTodo.classList.add('todo');
      todoDisplay.appendChild(newTodo);
    }
  }



  function listen() {
    addTaskBtn.addEventListener('click', () => {
      actions.addTodo();
      console.log(actions.getCurrentProject());
      displayTodos();
    });
  }
  
  return { displayTodos, listen };
})();

export default dom;

