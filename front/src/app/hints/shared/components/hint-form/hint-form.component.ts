import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBaseComponent} from '../../../../shared/components/form-base/form-base.component';

@Component({
  selector: 'app-hint-form',
  templateUrl: './hint-form.component.html',
  styleUrls: ['./hint-form.component.scss']
})
export class HintFormComponent extends FormBaseComponent implements OnInit {
  @Input() inputPlaceholder: string;
  @Input() form: FormGroup;
  @Input() options: any[] | string[];
  @Output() remove = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
