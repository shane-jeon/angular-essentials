import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  // To receive data from parent component (makes items bindable)
  @Input() items = []; // Adding property "items" initially set to an empty array
  // To send data to parent component
  @Output() itemAdded = new EventEmitter<string>();
  // To store user input
  newItem = '';

  // Event handler
  onAddItem(event) {
    // Emit the newItem value to the parent component
    this.itemAdded.emit(this.newItem);
  }
}
