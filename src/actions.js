import Todo from './todo.js';
import Project from './project.js';
import dom from './dom.js';

const actions = (() => {
  const projects = [];
  let currentProject;

  function createProject(name) {
    let newProject = new Project(name);
    projects.push(newProject);
    dom.displayProjects();
    projectIDs();
    currentProject = projects[newProject.id];
    console.log(getProjects());
  }

  function projectIDs() {
    let id = 0;
    for(const project of projects) {
      project.id = id;
      id++;
    }
  }

  function todoIDs() {
    let id = 0
    let todos = currentProject.getTodos();
    console.log(todos);
    for (const todo of todos) {
      todo.id = id;
      id++;
    } 
    console.log(currentProject.getTodos().length);  
  }

  function addTodo() {
    let newTodo =  new Todo('title', 'desc', 'priority', 'date');
    currentProject.addTodo(newTodo);
    console.log(currentProject.getTodos());
    todoIDs();
  }

  function removeTodo(index) {
    currentProject.removeTodo(index);
    dom.displayTodos();
    todoIDs();
  }

  function getCurrentProject() {
    return currentProject;
  }

  function getCurrentProjectName() {
    return currentProject.name;
  }
   
  function changeProject(index) {
    currentProject = projects[index];
    console.log(currentProject.name);
    console.log(currentProject.getTodos());
    dom.displayTodos();
  }

  function getProjects() {
    return projects;
  }

  return { createProject, addTodo, removeTodo, getCurrentProject, getProjects, changeProject, 
          getCurrentProjectName };
})();

export default actions;