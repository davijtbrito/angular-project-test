import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { AngularComponentsRoutingModule } from './angular-components-routing.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularComponentsRoutingModule,
    CommonModule
  ],
  exports: [GridComponent]
})
export class AngularComponentsModule { }
