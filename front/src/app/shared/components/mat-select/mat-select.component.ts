import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;
  @Input() options: any[];
  @Input() enableBlankOption?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
