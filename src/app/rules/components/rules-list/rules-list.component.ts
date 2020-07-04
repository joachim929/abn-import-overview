import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TransferConditionDto} from '../../../swagger/models/transfer-condition-dto';
import {RulesDataStore} from '../../../core/services/rules-data.store';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.scss']
})
export class RulesListComponent implements OnInit {
  rules$: Observable<TransferConditionDto[]>;
  isSaving$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private rulesDataStore: RulesDataStore) { }

  ngOnInit(): void {
    this.rulesDataStore.loadRules();
    this.rules$ = this.rulesDataStore.getRules();
    this.isSaving$ = this.rulesDataStore.getIsSaving();
    this.isLoading$ = this.rulesDataStore.getIsLoading();
  }

}
