import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  title = 'Dashboard';
  loadState = 'loading';

  updatedLoad() {
    this.loadState = 'finished';
  }
}
