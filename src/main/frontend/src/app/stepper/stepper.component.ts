import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    stepperOrientation = 'vertical';
    slideToggle = false;

    steps = [
        {"id": 1, "description": "step 1", "task": "step 1 tasks..."},
        {"id": 2, "description": "step 2", "task": "step 2 tasks..."},
        {"id": 3, "description": "step 3", "task": "step 3 tasks..."},
        {"id": 4, "description": "step 4", "task": "step 4 tasks..."},
        {"id": 5, "description": "step 5", "task": "step 5 tasks..."}
    ]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
      });
  }

}
