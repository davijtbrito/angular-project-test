import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedDataModule } from './shared-data/shared-data.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AngularComponentsModule } from './angular-components/angular-components.module';
import { LayoutExamplesModule } from './layout-examples/layout-examples.module';


@NgModule({
  declarations: [
    AppComponent,    
    ProductListComponent

  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    SharedDataModule,
    AngularComponentsModule,
    LayoutExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
