export default class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  display() {
    return `${this.title}, ${this.description}, ${this.dueDate}`;
  }
}