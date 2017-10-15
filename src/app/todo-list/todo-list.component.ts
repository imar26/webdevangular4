import {Component, OnInit} from '@angular/core';
import { Todo } from './todo2';
import { TODOS } from './todo-mock';
import {TodoService} from '../services/todo.service.client';

@Component({
  selector: 'app-todo-list',
  styles: [
    `.selected {
     background-color: lightblue;
   }`
  ],
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = new Todo();
  selectedTodo: Todo;
  onSelectTodo(todo: Todo) {
    this.selectedTodo = todo;
  }
  onAddTodo(todo: Todo): void {
    this.todoService.createTodo(todo)
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      );
  }
  onDeleteTodo(index: number): void {
    this.todoService.deleteTodo(index);
  }
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    // this.todos = this.todoService.findAllTodos();
    this.todoService.findAllTodos()
      .subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
        }
      );
  }
}
