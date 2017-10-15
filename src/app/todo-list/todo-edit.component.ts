import { Component } from '@angular/core';
import { Todo } from './todo2';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: 'todo-edit.component.html'
})
export class TodoEditComponent {
  @Input() todo: Todo;
}
