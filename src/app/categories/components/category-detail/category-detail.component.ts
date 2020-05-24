import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

/**
 * todo: seems like the way to solve this issue is using a directive
 *    prolly want to use formValueAccessor for this
 */

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: FormGroup;

  editModeControl = new FormControl(false);

  constructor() {
  }

  ngOnInit(): void {
  }

  resetControl(control) {
    control.reset();
    this.editModeControl.setValue(true);
  }

}
