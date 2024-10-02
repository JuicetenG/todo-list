import Todo from './todo.js';
import Project from './project.js';
import dom from './dom.js';

const actions = (() => {
  const projects = [];
  let currentProject;

  function createProject(name) {
    let newProject = new Project(name);
    projects.push(newProject);
    projectIDs();
    dom.displayProjects();
    currentProject = projects[newProject.id];
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
    for (const todo of todos) {
      todo.id = id;
      id++;
    } 
  }

  function addTodo(title, description, date, priority) {
    let newTodo =  new Todo(title, description, date, priority);
    currentProject.addTodo(newTodo);
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
    dom.displayTodos();
  }

  function getProjects() {
    return projects;
  }

  return { createProject, addTodo, removeTodo, getCurrentProject, getProjects, changeProject, 
          getCurrentProjectName };
})();

export default actions;