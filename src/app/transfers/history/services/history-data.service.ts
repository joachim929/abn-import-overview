import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferMutationApiService} from '../../../swagger/services/transfer-mutation-api.service';

@Injectable()
export class HistoryDataService {
  private transferHistory = new BehaviorSubject<any[]>([]);
  private dataStore: {
    transferHistory: []
  } = {
    transferHistory: []
  };

  constructor(
    private transferMutationApiService: TransferMutationApiService
  ) {
  }

  get history$(): Observable<any> {
    return this.transferHistory.asObservable();
  }

  setHistory(input) {
    this.dataStore.transferHistory = input;
    this.transferHistory.next(Object.assign({}, this.dataStore).transferHistory);
  }
}
