import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedDataModule } from './shared-data/shared-data.module';
import { ProductListComponent } from './angular-components/product-list/product-list.component';
import { AngularComponentsModule } from './angular-components/angular-components.module';
import { LayoutExamplesModule } from './layout-examples/layout-examples.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,    
    ProductListComponent, FileUploadComponent

  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    SharedDataModule,
    AngularComponentsModule,
    LayoutExamplesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
