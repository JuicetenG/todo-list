export default class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  display() {
    return `${this.title}, ${this.description}, ${this.priority}, ${this.dueDate}`;
  }
}