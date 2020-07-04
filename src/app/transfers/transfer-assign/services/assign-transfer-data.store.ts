import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferMutationDto} from '../../../swagger/models/transfer-mutation-dto';
import {TransferMutationApiService} from '../../../swagger/services/transfer-mutation-api.service';
import {switchMap, take} from 'rxjs/operators';

@Injectable()
export class AssignTransferDataStore {
  private transferMutations = new BehaviorSubject<TransferMutationDto[]>([]);
  private skip = new BehaviorSubject<number>(null);
  private isSaving = new BehaviorSubject<boolean>(false);

  private dataStore: {
    transferMutations: TransferMutationDto[],
    skip: number,
    limit: number,
    isSaving: boolean
  } = {
    transferMutations: [],
    skip: 0,
    limit: 10,
    isSaving: false
  };

  constructor(private apiService: TransferMutationApiService) {
    this.skip.pipe(
      switchMap((skipValue) => this.apiService.transferMutationControllerGetTransferMutationsByCategoryId({
        body: {skip: skipValue, limit: this.dataStore.limit}
      })
      )
    ).subscribe((response) => {
      this.dataStore.transferMutations = [...this.dataStore.transferMutations, ...response.transferMutations];
      this.dataStore = {...this.dataStore, skip: this.dataStore.skip + response.transferMutations.length, limit: 1, isSaving: false};
      this.transferMutations.next(Object.assign({}, this.dataStore).transferMutations);
      this.isSaving.next(Object.assign({}, this.dataStore).isSaving);
    });
    this.skip.next(0);
  }

  get transferMutations$(): Observable<TransferMutationDto[]> {
    return this.transferMutations.asObservable();
  }

  getIsSaving$(): Observable<boolean> {
    return this.isSaving.asObservable();
  }

  assignCategory(assignedMutation: TransferMutationDto) {
    this.dataStore.isSaving = true;
    this.isSaving.next(Object.assign({}, this.dataStore).isSaving);
    this.apiService.transferMutationControllerPatchTransferMutation({
      body: assignedMutation
    }).pipe(
      take(1),
    ).subscribe(() => {
      this.dataStore.transferMutations = [...this.dataStore.transferMutations].filter((mutation) => mutation.id !== assignedMutation.id);
      this.transferMutations.next(Object.assign({}, this.dataStore).transferMutations);
      this.skip.next(Object.assign({}, this.dataStore).skip + 1);
    });
  }
}
