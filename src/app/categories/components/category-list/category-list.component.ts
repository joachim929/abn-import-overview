import { Component, OnInit } from '@angular/core';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryGroups$: Observable<CategoryGroupDto[]>;

  constructor(
    private categoryDataStore: CategoryDataStore
  ) { }

  ngOnInit(): void {
    this.categoryGroups$ = this.categoryDataStore.categories$;
  }

}
