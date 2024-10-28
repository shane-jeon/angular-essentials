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
  // Setting initial array
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onNameChanged(newName) {
    this.rootName = newName;
    // Setting initial array
    this.rootItems = ['Apples', 'Bananas', 'Cherries'];
  }
  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
