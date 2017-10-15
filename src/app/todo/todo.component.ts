import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title: String;
  description: String;
  todos: Todo[] = [];

  addTodo = function () {
    const todo = new Todo(this.title, this.description);
    this.todos.push(todo);
  };

  deleteTodo = function (todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  };

  constructor() { }

  ngOnInit() {
  }

}
