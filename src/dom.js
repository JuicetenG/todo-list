import actions from './action.js';

const dom  = (() => {
  
  function displayTodos(current) {
    const todoDisplay = document.querySelector('#rightColumn');
    for (const todo of current) {
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
  
  return { displayTodos, listen};
})();

export default dom;

