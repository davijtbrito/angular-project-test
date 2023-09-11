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
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';
import { HostComponent } from './host/host.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    GridComponent,
    AgGridExampleComponent,
    StepperComponent,
    StepOneComponent,
    AutoCompleteComponent,
    DynamicSectionComponent,
    HostComponent
  ],
  imports: [    
    BrowserModule,
    MatStepperModule,    
    MatInputModule,    
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,    
    MatCardModule,    
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
