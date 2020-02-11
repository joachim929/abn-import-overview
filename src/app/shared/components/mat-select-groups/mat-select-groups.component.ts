import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-mat-select-groups',
  templateUrl: './mat-select-groups.component.html',
  styleUrls: ['./mat-select-groups.component.scss']
})
export class MatSelectGroupsComponent implements OnInit {
  @Input() label?: string;
  @Input() control: FormControl;
  @Input() groups: any[];
  @Input() groupKey?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
