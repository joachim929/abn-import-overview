import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryDataService} from '../../../core/services/category-data.service';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {filter} from 'rxjs/operators';

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
    unassigned: new FormControl(true)
  });

  categoryGroups$: Observable<CategoryGroupDto[]>;

  constructor(
    private categoryDataService: CategoryDataService
  ) {
  }

  ngOnInit(): void {
    this.categoryGroups$ = this.categoryDataService.categories$;
    this.filterForm.valueChanges.subscribe(next => console.log(next));
    this.filterForm.get('categories').valueChanges.pipe(
      filter(value => !!value)
    ).subscribe(next => {
      if (next && next.length > 0) {
        this.filterForm.get('unassigned').setValue(false, {emitEvent: false});
      }
     });
  }

  resetForm() {
    this.filterForm.reset();
  }
}
