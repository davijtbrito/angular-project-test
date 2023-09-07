import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';
import { AngularComponentsRoutingModule } from './angular-components-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridExampleComponent } from './ag-grid-example/ag-grid-example.component';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StepOneComponent } from './stepper/step-one/step-one.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    GridComponent,
    AgGridExampleComponent,
    StepperComponent,
    StepOneComponent,
    AutoCompleteComponent
  ],
  imports: [    
    BrowserModule,
    MatStepperModule,    
    MatInputModule,    
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,    
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
    AngularComponentsRoutingModule,
    CommonModule
  ],
  exports: [GridComponent, AgGridExampleComponent]
})
export class AngularComponentsModule { }
