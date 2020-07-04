import {Component, Input, OnInit} from '@angular/core';
import {
  FormControl,
} from '@angular/forms';
import {Observable} from 'rxjs';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {CategoryDto} from '../../../swagger/models/category-dto';

@Component({
  selector: 'app-categories-select',
  templateUrl: './categories-select.component.html',
  styleUrls: ['./categories-select.component.scss'],
})
export class CategoriesSelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label?: string;
  categoryGroups$: Observable<CategoryGroupDto[]>;

  constructor(private categoryDataStore: CategoryDataStore) {
  }

  ngOnInit() {
    this.categoryGroups$ = this.categoryDataStore.categories$;
  }
  compareFn(c1: CategoryDto, c2: CategoryDto): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
