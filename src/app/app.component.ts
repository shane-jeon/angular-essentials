import { Component } from '@angular/core';

// Decorator, TS feature. Attaches extra information to a class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Shane';

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
