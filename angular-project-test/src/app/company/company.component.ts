import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  
  searchTerm: string | undefined;
  searchResults: any; // Variable to store the API response

  constructor(private http: HttpClient) {}

  searchCompany(): void {
    if (!this.searchTerm) {
      return;
    }

    const endpoint = 'http://localhost:8080/woke-company/find-company';
    const params = { keyword: this.searchTerm };

    this.http.get(endpoint, { params }).subscribe((response) => {
      this.searchResults = response; // Store the API response in the variable
    });
  }
}
