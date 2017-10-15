import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-list/todo-edit.component';
import {TodoService} from './services/todo.service.client';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import {WebsiteService} from './services/website.service.client';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    TodoComponent,
    TodoListComponent,
    TodoEditComponent,
    WebsiteListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ TestService, TodoService, WebsiteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
