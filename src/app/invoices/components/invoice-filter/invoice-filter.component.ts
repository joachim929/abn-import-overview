import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryDataService} from '../../../core/services/category-data.service';
import {Observable} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';

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
    amount: new FormControl(),
    unassigned: new FormControl(false)
  });

  categoryGroups$: Observable<CategoryGroupDto[]>;

  constructor(
    private categoryDataService: CategoryDataService
  ) {
  }

  ngOnInit(): void {
    this.categoryGroups$ = this.categoryDataService.categories$;
    this.filterForm.valueChanges.subscribe(next => console.log(next));
  }

  resetForm() {
    this.filterForm.reset();
  }
}
