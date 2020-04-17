import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TransferDataStore} from '../../../services/transfer-data.store';
import {TransferMutationDto} from '../../../../swagger/models/transfer-mutation-dto';

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.scss']
})
export class CardMasterComponent implements OnInit {
  transferMutations$: Observable<TransferMutationDto[]>;
  recordCount$: Observable<number>; // todo needed for no data scenario?

  constructor(
    private transferDataService: TransferDataStore
  ) {
    this.transferMutations$ = this.transferDataService.transfers;
    this.recordCount$ = this.transferDataService.recordCount;
  }

  ngOnInit() {
  }
}
