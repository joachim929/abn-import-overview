import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferMutationDto} from '../../../swagger/models/transfer-mutation-dto';
import {TransferMutationApiService} from '../../../swagger/services/transfer-mutation-api.service';
import {take} from 'rxjs/operators';
import {TransferListParams} from '../../../swagger/models/transfer-list-params';

@Injectable()
export class AssignTransferDataStore {
  private transferMutations = new BehaviorSubject<TransferMutationDto[]>([]);

  private dataStore: {
    transferMutations: TransferMutationDto[]
  } = {
    transferMutations: []
  };

  constructor(private apiService: TransferMutationApiService) {
  }

  get transferMutations$(): Observable<TransferMutationDto[]> {
    return this.transferMutations.asObservable();
  }

  loadInit() {
    this.apiService.getByCategoryId({
      body: {limit: 10}
    }).pipe(take(1)).subscribe((response) => {
      console.log(response);
      this.dataStore.transferMutations = [...this.dataStore.transferMutations, ...response.transferMutations];
      this.transferMutations.next(Object.assign({}, this.dataStore).transferMutations);
    });
  }

  assignCategory(assignedMutation: TransferMutationDto) {
    const listParams: TransferListParams = {
      skip: this.dataStore.transferMutations.length,
      transferMutations: [assignedMutation],
      limit: 1
    };
    // assignMutation and update according to response
  }
}
