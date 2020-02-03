import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-hints-nav',
  templateUrl: './hints-nav.component.html',
  styleUrls: ['./hints-nav.component.scss']
})
export class HintsNavComponent extends HeaderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
