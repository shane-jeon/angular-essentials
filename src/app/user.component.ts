import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name" />
    <!-- <input type="text" [(ngModel)]="name"> -->
    <p>Hello {{ name }}!</p>
    <p>I'm the user component!</p>
    <app-user-detail></app-user-detail>
  `,
})
export class UserComponent {
  // name = 'Shane';
  @Input() name: string;
  @Output() nameChanged = new EventEmitter<any>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
