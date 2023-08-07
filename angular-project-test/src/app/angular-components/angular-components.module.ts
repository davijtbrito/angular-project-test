import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { AngularComponentsRoutingModule } from './angular-components-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridExampleComponent } from './ag-grid-example/ag-grid-example.component';

@NgModule({
  declarations: [
    GridComponent,
    AgGridExampleComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    AgGridModule,
    HttpClientModule,
    AngularComponentsRoutingModule,
    CommonModule
  ],
  exports: [GridComponent, AgGridExampleComponent]
})
export class AngularComponentsModule { }
