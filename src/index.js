import './css/style.css';
import './css/reset.css';
import dom from './dom.js';
import actions from './actions.js';
import Todo from './todo.js';
import Project from './project.js';

dom.listen();

actions.initialize();
console.log(actions.getCurrentProject());
dom.displayTodos();
actions.createProject("Justin");
console.log(actions.getCurrentProject());
actions.addTodo('t', 'e', 's', 't');
console.log(actions.getCurrentProject());
dom.displayTodos();
console.log(actions.getProjects());
actions.changeProject(0);
console.log(actions.getCurrentProject());
dom.displayTodos();
actions.changeProject(1);
console.log(actions.getCurrentProject());
dom.displayTodos();


console.log(actions.getCurrentProject());





