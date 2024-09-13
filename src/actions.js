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
  }

  function createProject(name) {
    let newProject = new Project(name);
    currentProject = newProject;
    projects.push(newProject);
  }

  function addTodo() {
    let newTodo =  new Todo('title', 'desc', 'priority', 'date');
    currentProject.addTodo(newTodo);
  }

  function getCurrentProject() {
    return currentProject;
  }

  function changeProject(index) {
    currentProject = projects[index];
  }

  function getProjects() {
    return projects;
  }

  return { initialize, createProject, addTodo, getCurrentProject, getProjects, changeProject };
})();

export default actions;