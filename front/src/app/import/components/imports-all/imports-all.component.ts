import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataParseService, FormattedData} from '../../services/data-parse.service';

@Component({
  selector: 'app-imports-all',
  templateUrl: './imports-all.component.html',
  styleUrls: ['./imports-all.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportsAllComponent implements OnInit {
  showAmount = 10;

  constructor(
    private dataParseService: DataParseService
  ) { }

  ngOnInit() {
  }

  get formattedData(): FormattedData[] {
    return this.dataParseService.formattedData;
  }

  loadMoreEntries() {
    this.showAmount += 10;
  }

}
