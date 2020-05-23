import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: FormGroup;
  editMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  blurTest($event) {
    this.editMode = false;
  }

  focusTest(event) {
    this.editMode = true;
  }

}
