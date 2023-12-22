import { Component } from '@angular/core';

@Component({//the component decorator is used for defining a component in an angular application
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
