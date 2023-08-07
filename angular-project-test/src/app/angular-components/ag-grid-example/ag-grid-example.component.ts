import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-example',
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.css']
})
export class AgGridExampleComponent {

  rowData: any[] = [];
  columnDefs: any[] = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];
  paginationPageSize = 10; // Number of rows to display per page

  constructor(private http: HttpClient) { }

  getDataFromUrl() {
    const url = 'https://www.ag-grid.com/example-assets/row-data.json';

    this.http.get<any[]>(url).subscribe(data => {
      this.rowData = data;
    });
  }
}
