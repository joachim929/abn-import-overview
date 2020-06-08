import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransferConditionDto} from '../../swagger/models/transfer-condition-dto';
import {RulesApiService} from '../../swagger/services/rules-api.service';
import {sortBy} from 'lodash';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RulesDataStore {
  private rules = new BehaviorSubject<TransferConditionDto[]>([]);
  private isLoading = new BehaviorSubject<boolean>(false);
  private isSaving = new BehaviorSubject<boolean>(false);
  private dataStore: {
    rules: TransferConditionDto[]
    isLoading: boolean,
    isSaving: boolean
  } = {
    rules: [],
    isLoading: false,
    isSaving: false
  };

  constructor(
    private rulesApiService: RulesApiService
  ) {
  }

  loadRules(): void {
    this.setIsLoading(true);
    this.rulesApiService.rulesControllerGetAll()
      .pipe(take(1))
      .subscribe((response) => {
      this.setRules(response);
    });
  }

  getIsSaving(): Observable<boolean> {
    return this.isSaving.asObservable();
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  getRules(): Observable<TransferConditionDto[]> {
    return this.rules.asObservable();
  }

  addRule(rule: TransferConditionDto): void {
    this.setIsSaving(true);
    this.rulesApiService.rulesControllerPost({body: rule})
      .pipe(take(1))
      .subscribe((response) => {
        this.dataStore = {...this.dataStore, rules: sortBy([...this.dataStore.rules, response], 'name')};
        this.rules.next(Object.assign({}, this.dataStore).rules);
        this.setIsSaving(false);
      });
  }

  private setRules(rules: TransferConditionDto[]): void {
    this.setIsLoading(false);
    this.dataStore = {...this.dataStore, rules};
    this.rules.next(Object.assign({}, this.dataStore).rules);
  }

  private setIsLoading(state: boolean): void {
    this.dataStore = {...this.dataStore, isLoading: state};
    this.isLoading.next(Object.assign({}, this.dataStore).isLoading);
  }

  private setIsSaving(state: boolean): void {
    this.dataStore = {...this.dataStore, isSaving: state};
    this.isSaving.next(Object.assign({}, this.dataStore).isSaving);
  }
}
