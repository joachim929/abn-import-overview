import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-data-nav',
  templateUrl: './data-nav.component.html',
  styleUrls: ['./data-nav.component.scss']
})
export class DataNavComponent extends HeaderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
