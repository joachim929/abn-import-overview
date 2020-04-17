import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  isSmall = false;
  isXSmall = false;
  isMedium = false;

  constructor(private breakpointObserver: BreakpointObserver) {

    breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall,
      Breakpoints.Medium
    ]).subscribe((result) => {
      this.isSmall = this.breakpointObserver.isMatched('(min-width: 600px) and (max-width: 959.99px)');
      this.isXSmall = this.breakpointObserver.isMatched('(max-width: 599.99px)');
      this.isMedium = this.breakpointObserver.isMatched('(min-width: 960px)');
    });
  }
}
