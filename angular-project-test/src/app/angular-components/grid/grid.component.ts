import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  data = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { name: 'Bob Johnson', age: 35, email: 'bob@example.com' }
  ];
}
