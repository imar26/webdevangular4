import {Injectable} from '@angular/core';
import {Todo} from '../todo-list/todo2';
import {TODOS} from '../todo-list/todo-mock';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TodoService {
  todos: Todo[] = TODOS;
  // findAllTodos(): Todo[] {
  findAllTodos() {
    console.log('findAllTodos');
    return this.http.get('http://localhost:3100/api/todo')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
    // return this.todos;
  }
  createTodo(todo: Todo) {
    const todoCopy = { ...todo };
    this.todos.push(todoCopy);
    return this.http.post('http://localhost:3100/api/todo', todo)
      .map(
        (res: Response) => {
          return res.json();
      });
  }
  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
  constructor(private http: Http) {}
}
