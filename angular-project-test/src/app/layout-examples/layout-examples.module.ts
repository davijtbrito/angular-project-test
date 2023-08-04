import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [HomeComponent, AboutComponent]
})
export class LayoutExamplesModule { }
