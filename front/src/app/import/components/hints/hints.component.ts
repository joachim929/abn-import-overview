import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss']
})
export class HintsComponent implements OnInit {
  hintForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.hintForm = new FormGroup({
      amount: new FormControl(),
      amountLogic: new FormControl(),
      description: new FormControl(),
      descriptionLogic: new FormControl(),
      category: new FormControl(null, [
        Validators.required
      ])
    });
  }

}
