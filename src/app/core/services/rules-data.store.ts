import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TransferConditionDto} from '../../swagger/models/transfer-condition-dto';
import {RulesApiService} from '../../swagger/services/rules-api.service';
import {sortBy} from 'lodash-es';
import {catchError, filter, take} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

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
    private rulesApiService: RulesApiService,
    private snackBarService: MatSnackBar,
    private router: Router
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
        this.setRules(sortBy([...this.dataStore.rules, response], 'name'));
        this.router.navigate(['/rules']);
      });
  }

  patchRule(editedRule: TransferConditionDto): void {
    this.setIsSaving(true);
    this.rulesApiService.rulesControllerPatch({body: editedRule})
      .pipe(take(1))
      .subscribe((response) =>
        this.setRules([...this.dataStore.rules].map((rule) => rule.id === response.id ? response : rule)));
  }

  deleteRule(id: string) {
    this.setIsSaving(true);
    this.rulesApiService.rulesControllerDelete({id})
      .pipe(
        take(1),
        catchError((error) => {
          this.handleError(error);
          return of(false);
        }))
      .subscribe((response) => {
        if (response !== false) {
          this.setRules([...this.dataStore.rules].filter((rule) => rule.id !== id));
        }
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

  private handleError(error: HttpErrorResponse) {
    this.setIsSaving(false);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      this.snackBarService.open(`Something went wrong, HttpStatus: ${error.status}, body was: ${error.error}`, 'OK', {duration: 5000});
    }
  }

}
