import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-rules-logic-array',
  templateUrl: './rules-logic-array.component.html',
  styleUrls: ['./rules-logic-array.component.scss']
})
export class RulesLogicArrayComponent implements OnInit {
  @HostBinding('class.edit-mode') @Input() editMode;
  @Input() formArray: FormArray;

  constructor() { }

  ngOnInit(): void {
  }

  removeLogicAt(index: number): void {
    this.formArray.removeAt(index);
  }

  addLogic(): void {
    this.formArray.push(new FormControl());
  }

}
