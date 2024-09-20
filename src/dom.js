import actions from './actions.js';

const dom  = (() => {
  const addTaskBtn = document.querySelector("#addTodo");
  const project0 = document.querySelector('#project0');
  const project1 = document.querySelector('#project1');

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
      projectsDisplay.appendChild(newProject);
    }
  }

  function listen() {
    addTaskBtn.addEventListener('click', () => {
      actions.addTodo();
      displayTodos();
    });

    project0.addEventListener('click', () => {
      actions.changeProject(0);
    });

    
    project1.addEventListener('click', () => {
      actions.changeProject(1);
    });
  }
  
  return { displayTodos, displayProjects, listen };
})();

export default dom;

