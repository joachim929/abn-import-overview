import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';
import {TransferDataService} from '../../../services/transfer-data.service';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  transferMutations$: Observable<TransferMutationDto[]>;
  recordCount$: Observable<number>;

  constructor(
    private transferDataService: TransferDataService
  ) {
    this.transferMutations$ = this.transferDataService.transfers;
    this.recordCount$ = this.transferDataService.recordCount;
  }

  loadMore() {
    this.transferDataService.loadMore();
  }

}
