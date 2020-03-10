import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferApiService} from '../../swagger/services/transfer-api.service';
import {Transfer} from '../../swagger/models';

@Injectable()
export class TransferDataService {
  private transfers = new BehaviorSubject<Transfer[]>([]);
  private dataStore: {
    transfers$: Transfer[]
  } = {
    transfers$: []
  };

  constructor(
    private transferApiService: TransferApiService
  ) {
    this.loadItems();
  }

  get transfers$(): Observable<Transfer[]> {
    return this.transfers.asObservable();
  }

  setTransfers(input: Transfer[]) {
    this.dataStore.transfers$ = input;
    this.transfers.next(Object.assign({}, this.dataStore).transfers$);
  }

  loadItems() {
    console.log('test');
    this.transferApiService.getTransfer({}).subscribe((transfers) => {
      this.setTransfers(transfers);
    });
  }
}
