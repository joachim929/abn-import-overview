import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.scss']
})
export class MatInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() type: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() error: string;
  @Input() errorType: string;
  @Input() hint: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
