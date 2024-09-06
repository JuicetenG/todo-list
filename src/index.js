import './css/style.css';
import './css/reset.css';
import * as dom from './dom.js';
import Todo from './todo.js';
import testWebpack from './todo.js';

export { testArray };
//testWebpack();

let testArray = [];
let todo1 = new Todo('clean room', 'need to clean room', 'Low', 'september 5th');
testArray[0] = todo1;

let todo2 = new Todo('sell furniture', 'it\'s gotta go', 'high', 'end of month');
testArray[1] = todo2;

dom.displayTodos(testArray);
