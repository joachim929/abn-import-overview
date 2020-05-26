import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import * as moment from 'moment';
import {TransferDataStore} from '../../services/transfer-data.store';
import {isEqual} from 'lodash';
import {InvoiceFilterControlNames, TransferFilterService} from '../../services/transfer-filter.service';
import {TransferListParams} from '../../../swagger/models/transfer-list-params';

@Component({
  selector: 'app-transfer-filter',
  templateUrl: './transfer-filter.component.html',
  styleUrls: ['./transfer-filter.component.scss']
})
export class TransferFilterComponent implements OnInit {
  filterForm: FormGroup = new FormGroup({
    date: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    categories: new FormControl(),
    minAmount: new FormControl(),
    maxAmount: new FormControl(),
    maxAmountToggle: new FormControl(),
    minAmountToggle: new FormControl()
  });

  categoryGroups$: Observable<CategoryGroupDto[]>;
  today: Date;
  minAmount;
  maxAmount;
  recordCount$: Observable<number>;
  defaultParams: TransferListParams;

  constructor(
    private categoryDataStore: CategoryDataStore,
    private transferDataService: TransferDataStore,
    private transferFilterService: TransferFilterService
  ) {
    this.getControl('minAmount').disable({emitEvent: false});
    this.getControl('maxAmount').disable({emitEvent: false});
    this.today = moment().endOf('day').toDate();
    this.defaultParams = this.transferFilterService.buildParams(this.filterForm);
  }

  get names() {
    return this.transferFilterService.names;
  }

  ngOnInit(): void {
    this.transferDataService.adjustFilter(this.defaultParams);
    this.getControl('maxAmountToggle').valueChanges.subscribe(next =>
      next ?
        this.getControl('maxAmount').enable({emitEvent: false}) :
        this.getControl('maxAmount').disable({emitEvent: false}));

    this.getControl('minAmountToggle').valueChanges.subscribe(next =>
      next ?
        this.getControl('minAmount').enable({emitEvent: false}) :
        this.getControl('minAmount').disable({emitEvent: false}));

    this.categoryGroups$ = this.categoryDataStore.categories$;

    this.filterForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged((a, b) => isEqual(a, b))
    ).subscribe((next) => {
      const params = this.transferFilterService.buildParams(this.filterForm);
      this.transferDataService.adjustFilter(params);
    });

    this.transferDataService.minAmount.subscribe((next) => this.minAmount = next);
    this.transferDataService.maxAmount.subscribe((next) => this.maxAmount = next);
    this.recordCount$ = this.transferDataService.recordCount;
  }

  getControl(name: InvoiceFilterControlNames): FormControl {
    return this.filterForm.get(name) as FormControl;
  }

  resetForm() {
    this.filterForm.reset();
  }

  formatLabel(value: number): string {
    if (value >= 1000 || value <= -1000) {
      return (Math.round(value / 100) / 10) + 'k';
    } else {
      return value.toFixed(0);
    }
  }
}
