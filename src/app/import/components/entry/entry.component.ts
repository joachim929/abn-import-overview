import {Component, Input, OnInit} from '@angular/core';
import {FormattedData} from '../../services/data-parse.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: FormattedData;

  constructor() { }

  ngOnInit() {
  }

}
