import { Component } from '@angular/core';
import { FormDataService } from './form-data.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {

  isLinear = false;

  constructor(protected formService: FormDataService) {}
}
