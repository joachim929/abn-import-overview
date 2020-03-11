import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferApiService} from '../../swagger/services/transfer-api.service';
import {Transfer, TransferMutationDto} from '../../swagger/models';

@Injectable()
export class TransferDataService {
  private transfers = new BehaviorSubject<TransferMutationDto[]>([]);
  private dataStore: {
    transfers$: TransferMutationDto[]
  } = {
    transfers$: []
  };

  constructor(
    private transferApiService: TransferApiService
  ) {
    this.loadItems();
  }

  get transfers$(): Observable<TransferMutationDto[]> {
    return this.transfers.asObservable();
  }

  setTransfers(input: TransferMutationDto[]) {
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
