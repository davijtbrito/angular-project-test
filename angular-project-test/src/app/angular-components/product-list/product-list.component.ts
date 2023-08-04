// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  // to make this work
  //open 2 terminals and in one you call "ng serve"
  //the other one you call "npm run start:mock-server". The "start:mock-server"
  //should be declared in the package.json in the scripts section
  ngOnInit() {
    console.log('Mocking the server and retrieving data from db.json');
    this.http.get<Product[]>('http://localhost:3000/products').subscribe((data) => {
      this.products = data;
    });
  }
}
