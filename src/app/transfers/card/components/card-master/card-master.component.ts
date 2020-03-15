import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TransferDataService} from '../../../services/transfer-data.service';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.scss']
})
export class CardMasterComponent implements OnInit {
  transferMutations$: Observable<TransferMutationDto[]>;
  recordCount$: Observable<number>;
  selectedTransferMutation$: Observable<TransferMutationDto>;

  constructor(
    private transferDataService: TransferDataService
  ) {
    this.transferMutations$ = this.transferDataService.transfers;
    this.recordCount$ = this.transferDataService.recordCount;
    this.selectedTransferMutation$ = this.transferDataService.selectedTransfer;
  }

  ngOnInit() {
  }

  loadMore() {
    this.transferDataService.loadMore();
  }
}
