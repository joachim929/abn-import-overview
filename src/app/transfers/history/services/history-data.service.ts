import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferMutationApiService} from '../../../swagger/services/transfer-mutation-api.service';
import {Transfer} from '../../../swagger/models';
import {filter, tap} from 'rxjs/operators';

@Injectable()
export class HistoryDataService {
  private transfer = new BehaviorSubject<Transfer>(null);
  private dataStore: {
    transfer: Transfer
  } = {
    transfer: null
  };

  constructor(
    private transferMutationApiService: TransferMutationApiService
  ) {
  }

  get transfer$(): Observable<any> {
    return this.transfer.asObservable();
  }

  setTransfer(input: Transfer) {
    this.dataStore.transfer = input;
    this.transfer.next(Object.assign({}, this.dataStore).transfer);
  }

  getTransfer(id: number) {
    this.transferMutationApiService.getTransferMutationHistory({id}).pipe(
      filter(result => !!result)
    ).subscribe((result) => this.setTransfer(result));
  }
}
