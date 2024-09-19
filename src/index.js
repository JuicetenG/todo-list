import './css/style.css';
import './css/reset.css';
import dom from './dom.js';
import actions from './actions.js';
import Todo from './todo.js';
import Project from './project.js';

dom.listen();
actions.initialize();
dom.displayTodos();
console.log(actions.getCurrentProjectName());
actions.createProject("Justin");
dom.displayTodos();













