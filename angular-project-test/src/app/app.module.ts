import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompanyComponent } from './company/company.component';
import { SharedDataModule } from './shared-data/shared-data.module';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ProductListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedDataModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
