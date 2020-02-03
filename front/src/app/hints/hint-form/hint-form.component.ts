import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBaseComponent} from '../../components/form-base/form-base.component';

@Component({
  selector: 'app-hint-form',
  templateUrl: './hint-form.component.html',
  styleUrls: ['./hint-form.component.scss']
})
export class HintFormComponent extends FormBaseComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() options: any[] | string[];

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
