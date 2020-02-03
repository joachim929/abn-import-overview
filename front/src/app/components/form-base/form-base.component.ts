import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getGroups(form: FormGroup, name: string): FormGroup[] {
    return <FormGroup[]>(<FormArray>form.get(name)).controls;
  }

  getControl(form: FormGroup, name: string): FormControl {
    return <FormControl>form.get(name);
  }
}
