import actions from './actions.js';

const dom  = (() => {
  const addTaskBtn = document.querySelector('#addTodo');
  const addProjectBtn = document.querySelector('#addProject')
  let projectButtons;

  const projectForm = document.querySelector('#projectForm');
  const projectModal = document.querySelector('#projectModal');
  const projectSubmit = document.querySelector('#projectSubmitButton');
  const projectClose = document.querySelector('#projectCloseButton');

  const todoForm = document.querySelector('#todoForm');
  const todoModal = document.querySelector('#todoModal');
  const todoSubmit = document.querySelector('#todoSubmitButton');
  const todoClose = document.querySelector('#todoCloseButton');

  let todoTitle = document.querySelector('#todoTitle');
  let todoDescription = document.querySelector('#todoDesc');
  let todoDate = document.querySelector('#todoDate');
  let todoPriority = document.querySelector('#todoPriority');

  let projectName = document.querySelector('#projectName');

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
      let newProject = document.createElement('div');
      newProject.textContent = project.name;
      newProject.classList.add('project');
      newProject.value = project.id;
      projectsDisplay.appendChild(newProject);
    }
    projectButtons = document.querySelectorAll('.project');
    projectButtons.forEach(button => button.addEventListener('click', () => {
      actions.changeProject(button.value);
    }));
  }

  function listen() {
    addTaskBtn.addEventListener('click', () => {
      todoModal.showModal();
    });

    todoSubmit.addEventListener('click', () => {
      if(todoForm.checkValidity() === true) {
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

    addProjectBtn.addEventListener('click', ()=> {
      projectModal.showModal();
    });

    projectSubmit.addEventListener('click', () => {
      if(projectForm.checkValidity() === true) {
        actions.createProject(projectName.value);
        projectModal.close();
        projectForm.reset();
      } else return;
    });

    projectClose.addEventListener('click', () => {
      projectModal.close();
    });
  }
  
  return { displayTodos, displayProjects, listen };
})();

export default dom;

