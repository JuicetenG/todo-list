import actions from './actions.js';

const dom  = (() => {
 
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
    const addTaskBtn = document.querySelector('#addTodo');
    addTaskBtn.addEventListener('click', () => {
      
    });
  }
  
  return { displayTodos, listen };
})();

export default dom;

