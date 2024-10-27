import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  title = 'Dashboard';
  loadState = 'true';

  updatedLoad() {
    this.loadState = 'finished';
  }
}
