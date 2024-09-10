import './css/style.css';
import './css/reset.css';
import dom from './dom.js';
import actions from './actions.js';
import Todo from './todo.js';
import Project from './project.js';


let defaultArray = new Project("Default");
//let justinsProject = new Project("Justin");

let todo1 = new Todo('clean room', 'need to clean room', 'Low', 'september 5th');
let todo2 = new Todo('sell furniture', 'it\'s gotta go', 'high', 'end of month');
defaultArray.addTodo(todo1);
defaultArray.addTodo(todo2);

console.log(defaultArray.name);
dom.displayTodos(defaultArray);


/*
let todo3 = new Todo('3', '33', '333', '3333');
let todo4 = new Todo('4', '44', '444', '4444');
let todo5 = new Todo('5', '55', '555', '5555');
justinsProject.addTodo(todo3);
defaultArray.addTodo(todo3);
justinsProject.addTodo(todo4);
defaultArray.addTodo(todo4);
justinsProject.addTodo(todo5);
defaultArray.addTodo(todo5);
*/



