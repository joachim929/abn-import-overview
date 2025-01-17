import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BreakpointService} from '../../../core/services/breakpoint.service';

@Component({
  selector: 'app-categories-master',
  templateUrl: './categories-master.component.html',
  styleUrls: ['./categories-master.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoriesMasterComponent implements OnInit {

  constructor(
    private breakpointService: BreakpointService
  ) {
  }

  ngOnInit(): void {
  }

  get isSmall(): boolean {
    return this.breakpointService.isXSmall || this.breakpointService.isSmall;
  }
}
