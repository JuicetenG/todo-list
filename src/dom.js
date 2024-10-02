import actions from './actions.js';

const dom  = (() => {
  const addTaskBtn = document.querySelector("#addTodo");
  let projectButtons;

  const todoForm = document.querySelector('#todoForm');
  const todoModal = document.querySelector('#todoModal');
  const todoSubmit = document.querySelector('#todoSubmitButton');
  const todoClose = document.querySelector('#todoCloseButton');

  let todoTitle = document.querySelector('#todoTitle');
  let todoDescription = document.querySelector('#todoDesc');
  let todoDate = document.querySelector('#todoDate');
  let todoPriority = document.querySelector('#todoPriority');

  function displayTodos() {
    const todoDisplay = document.querySelector('#rightColumn');
    todoDisplay.textContent = '';
    let currentProject = actions.getCurrentProject();
    let currentTodos = currentProject.todos;
    for (const todo of currentTodos) {
      let newTodo = document.createElement('div');
      newTodo.textContent = todo.display();
      newTodo.classList.add('todo');
      todoDisplay.appendChild(newTodo);
    }
  }

  function displayProjects() {
    const projectsDisplay = document.querySelector('#leftColumn');
    projectsDisplay.textContent = '';
    let projects = actions.getProjects();
    for(const project of projects) {
      let newProject = document.createElement('button');
      newProject.textContent = project.name;
      newProject.classList.add('project');
      newProject.value = project.id;
      projectsDisplay.appendChild(newProject);
    }
    projectButtons = document.querySelectorAll('.project');
    projectButtons.forEach(project => console.log(project.value));
  }

  function listen() {
    addTaskBtn.addEventListener('click', () => {
      displayTodos();
      todoModal.showModal();
    });

    todoSubmit.addEventListener('click', () => {
      if(todoForm.checkValidity() === true){
        actions.addTodo(todoTitle.value, todoDescription.value, 
          todoDate.value, todoPriority.value);
        todoModal.close();
        todoForm.reset();
        displayTodos();
      } else return;
    });

    todoClose.addEventListener('click', () => {
      todoModal.close();
    });

    projectButtons.forEach(button => button.addEventListener('click', () => {
      actions.changeProject(button.value);
    }))
  }
  
  return { displayTodos, displayProjects, listen };
})();

export default dom;

