import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html', //Commented by me to make the application work
  template: `<router-outlet></router-outlet>`, //Uncommented by me to make the application work
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
