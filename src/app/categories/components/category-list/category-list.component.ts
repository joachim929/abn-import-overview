import { Component, OnInit } from '@angular/core';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {CategoryGroupDto} from '../../../swagger/models/category-group-dto';
import {Observable} from 'rxjs';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<CategoryGroupDto>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.categories, event.previousIndex, event.currentIndex);
    } else {
      const categories = (event.previousContainer.data as CategoryGroupDto).categories;

      transferArrayItem(categories,
        event.container.data.categories,
        event.previousIndex,
        event.currentIndex);
    }
    if (event.previousContainer === event.container && event.previousIndex !== event.currentIndex) {
      this.categoryDataStore.moveCategories([event.container.data]);
    } else if ( event.previousContainer !== event.container) {
      this.categoryDataStore.moveCategories([event.previousContainer.data, event.container.data]);
    }
  }

  deleteCategoryGroup(group: CategoryGroupDto) {
    this.categoryDataStore.deleteCategoryGroup(group);
  }
}
