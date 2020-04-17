import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';
import {TransferDataStore} from '../../../services/transfer-data.store';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent {
  transferMutations$: Observable<TransferMutationDto[]>;
  recordCount$: Observable<number>;

  constructor(
    private transferDataService: TransferDataStore
  ) {
    this.transferMutations$ = this.transferDataService.transfers;
    this.recordCount$ = this.transferDataService.recordCount;
  }

  loadMore() {
    this.transferDataService.loadMore();
  }

}
