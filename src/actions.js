import Todo from './todo.js';
import Project from './project.js';
import dom from './dom.js';

const actions = (() => {
  const defaultProject = new Project('Default');
  let currentProject = defaultProject;
  const projects = [];
  projects.push(defaultProject);

  function initialize() {
    let todo1 = new Todo('clean room', 'need to clean room', 'Low', 'september 5th');
    let todo2 = new Todo('sell furniture', 'it\'s gotta go', 'high', 'end of month');
    defaultProject.addTodo(todo1);
    defaultProject.addTodo(todo2);
    todoIDs();
  }

  function createProject(name) {
    let newProject = new Project(name);
    currentProject = newProject;
    projects.push(newProject);
    dom.displayProjects();
    projectIDs();
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
  }

  function addTodo() {
    let newTodo =  new Todo('title', 'desc', 'priority', 'date');
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
    console.log(currentProject.name);
    console.log(currentProject.getTodos());
    dom.displayTodos();
  }

  function getProjects() {
    return projects;
  }

  return { initialize, createProject, addTodo, removeTodo, getCurrentProject, getProjects, changeProject, 
          getCurrentProjectName };
})();

export default actions;