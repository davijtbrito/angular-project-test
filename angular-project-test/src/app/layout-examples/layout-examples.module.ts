import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AngularComponentsModule } from '../angular-components/angular-components.module';
import { LayoutExamplesRoutingModule } from './layout-examples-routing.module';
import { AngularComponentsRoutingModule } from '../angular-components/angular-components-routing.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutExamplesRoutingModule,
    AngularComponentsRoutingModule,    
    AngularComponentsModule,
    CommonModule
  ],
  exports: [HomeComponent, AboutComponent]
})
export class LayoutExamplesModule { }
