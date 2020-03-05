import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryDataService} from '../../../core/services/category-data.service';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {debounceTime, distinctUntilChanged, filter, map, take} from 'rxjs/operators';
import * as moment from 'moment';
import {InvoiceDataService} from '../../services/invoice-data.service';
import {isEqual} from 'lodash';
import {InvoiceFilteredDto} from '../../../swagger/models/invoice-filtered-dto';

type InvoiceFilterControlNames = 'date.from' |
  'date.to' |
  'categories' |
  'minAmount' |
  'maxAmount' |
  'maxAmountToggle' |
  'minAmountToggle';

@Component({
  selector: 'app-invoice-filter',
  templateUrl: './invoice-filter.component.html',
  styleUrls: ['./invoice-filter.component.scss']
})
export class InvoiceFilterComponent implements OnInit {
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

  names = {
    date: {
      from: 'from',
      to: 'to'
    },
    categories: 'categories',
    minAmount: 'minAmount',
    maxAmount: 'maxAmount',
    assigned: 'assigned'
  };

  categoryGroups$: Observable<CategoryGroupDto[]>;
  today: Date;
  minAmount;
  maxAmount;
  recordCount$: Observable<number>;
  defaultParams: InvoiceFilteredDto;

  constructor(
    private categoryDataService: CategoryDataService,
    private invoiceDataService: InvoiceDataService
  ) {
    this.getControl('minAmount').disable({emitEvent: false});
    this.getControl('maxAmount').disable({emitEvent: false});
    this.today = moment().endOf('day').toDate();
    this.defaultParams = this.buildParams();
  }

  ngOnInit(): void {
    this.invoiceDataService.getFilteredInvoices(this.defaultParams);
    this.getControl('maxAmountToggle').valueChanges.subscribe(next =>
      next ? this.getControl('maxAmount').enable({emitEvent: false}) :
        this.getControl('maxAmount').disable({emitEvent: false}));

    this.getControl('minAmountToggle').valueChanges.subscribe(next =>
      next ? this.getControl('minAmount').enable({emitEvent: false}) :
        this.getControl('minAmount').disable({emitEvent: false}));

    this.categoryGroups$ = this.categoryDataService.categories$;

    this.filterForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged((a, b) => isEqual(a, b))
    ).subscribe((next) => {
      const params = this.buildParams();
      if (!isEqual(this.defaultParams, params)) {
        this.invoiceDataService.getFilteredInvoices(params);
      }
    });

    this.getControl('maxAmount').valueChanges.pipe(
      filter(x => !!x),
      map(value => Number(value.toFixed(2)))
    ).subscribe((x) => console.log(x));

    this.getControl('minAmount').valueChanges.pipe(
      filter(x => !!x),
      map(value => Number(value.toFixed(2)))
    ).subscribe((x) => console.log(x));

    this.invoiceDataService.minAmount$.subscribe((next) => this.minAmount = next);
    this.invoiceDataService.maxAmount$.subscribe((next) => this.maxAmount = next);
    this.recordCount$ = this.invoiceDataService.recordCount$;
  }

  getControl(name: InvoiceFilterControlNames): FormControl {
    return this.filterForm.get(name) as FormControl;
  }

  resetForm() {
    this.filterForm.reset();
  }

  formatLabel(value: number) {
    if (value >= 1000 || value <= -1000) {
      return (Math.round(value / 100) / 10) + 'k';
    } else {
      return value.toFixed(0);
    }
  }

  private buildParams(): InvoiceFilteredDto {
    return {
      endDate: this.getControl('date.to').value || null,
      startDate: this.getControl('date.from').value || null,
      skip: 0,
      maxAmount: this.getControl('maxAmount').disabled ? null : Number(this.getControl('maxAmount').value),
      minAmount: this.getControl('minAmount').disabled ? null : Number(this.getControl('minAmount').value),
    };
  }
}
