import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
  })
  export class FormDataService {

    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    constructor(private _formBuilder: FormBuilder){

    }
  }