import {Routes, RouterModule} from '@angular/router';
// import {HomeComponent} from './components/home/home.component';
import {ModuleWithProviders} from '@angular/core';
// import {TestComponent} from './components/test/test.component';
// import {TodoComponent} from './todo/todo.component';
// import {TodoListComponent} from './todo-list/todo-list.component';

// User Components
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
// Website Components
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
// Page Components
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
// Widget Components
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';

const APP_ROUTES: Routes = [
  // {path: '', component : HomeComponent},
  // {path: 'todo', component : TodoComponent},
  // {path: 'todoList', component : TodoListComponent},
  // {path: 'test', component: TestComponent}
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user/:userId', component: ProfileComponent},
  {path: 'user/:userId/website', component: WebsiteListComponent},
  {path: 'user/:userId/website/new', component: WebsiteNewComponent},
  {path: 'user/:userId/website/:websiteId', component: WebsiteEditComponent},
  {path: 'user/:userId/website/:websiteId/page', component: PageListComponent},
  {path: 'user/:userId/website/:websiteId/page/new', component: PageNewComponent},
  {path: 'user/:userId/website/:websiteId/page/:pageId', component: PageEditComponent},
  {path: 'user/:userId/website/:websiteId/page/:pageId/widget', component: WidgetListComponent},
  {path: 'user/:userId/website/:websiteId/page/:pageId/widget/choose', component: WidgetChooserComponent},
  {path: 'user/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: WidgetEditComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
