import Todo from './todo.js';
import Project from './project.js';

const actions = (() => {
  let current;

  function addProject(name) {
    let newProject = new Project(name);
  }

  function addTask() {

  }

  function initializeDefault() {
    const defaultProject = new Project("Default");
    let todo1 = new Todo('clean room', 'need to clean room', 'Low', 'september 5th');
    let todo2 = new Todo('sell furniture', 'it\'s gotta go', 'high', 'end of month');
    defaultProject.addTodo(todo1);
    defaultProject.addTodo(todo2);
    current = defaultProject;
  }

  return { initializeDefault, current, addProject, addTask };
})();

let defaultArray = new Project("Default");
let justinsProject = new Project("Justin");

let todo1 = new Todo('clean room', 'need to clean room', 'Low', 'september 5th');
let todo2 = new Todo('sell furniture', 'it\'s gotta go', 'high', 'end of month');
defaultArray.addTodo(todo1);
defaultArray.addTodo(todo2);

let todo3 = new Todo('3', '33', '333', '3333');
let todo4 = new Todo('4', '44', '444', '4444');
let todo5 = new Todo('5', '55', '555', '5555');
justinsProject.addTodo(todo3);
defaultArray.addTodo(todo3);
justinsProject.addTodo(todo4);
defaultArray.addTodo(todo4);
justinsProject.addTodo(todo5);
defaultArray.addTodo(todo5);

console.log(defaultArray.name);
dom.displayTodos(justinsProject.todos);

export default actions;