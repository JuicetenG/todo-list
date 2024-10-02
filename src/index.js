import './css/style.css';
import './css/reset.css';
import dom from './dom.js';
import actions from './actions.js';
import Todo from './todo.js';
import Project from './project.js';

actions.createProject('default');
actions.addTodo('walk', 'go for a walk', 'date', 'high');
dom.displayTodos();
actions.createProject('Justin');
actions.createProject('three');

dom.listen();











