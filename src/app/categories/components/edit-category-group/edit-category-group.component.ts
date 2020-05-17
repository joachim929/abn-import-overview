import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, switchMap, tap} from 'rxjs/operators';
import {CategoryDataStore} from '../../../core/services/category-data.store';
import {combineLatest} from 'rxjs';
import {CategoryGroupDto} from '../../../swagger/models';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-category-group',
  templateUrl: './edit-category-group.component.html',
  styleUrls: ['./edit-category-group.component.scss']
})
export class EditCategoryGroupComponent implements OnInit {
  selectedCategory$;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryDataService: CategoryDataStore
  ) {
  }

  ngOnInit() {
    this.selectedCategory$ = combineLatest([
      this.activatedRoute.paramMap.pipe(
        filter(paramMap => paramMap.has('id'))
      ),
      this.categoryDataService.categories$.pipe(filter(x => !!x && x.length > 0))
    ]).pipe(
      tap(([paramMap, categories]) => this.categoryDataService.setSelectedCategory(paramMap.get('id'))),
      switchMap(() => this.categoryDataService.selectedCategory$),
      filter((categoryGroup) => !!categoryGroup),
      tap((next) => this.initForm(next))
    );
  }

  initForm(categoryGroup: CategoryGroupDto) {
    this.form = new FormGroup({
      categories: new FormArray([]),
      description: new FormControl(categoryGroup.description),
      id: new FormControl(categoryGroup.id),
      name: new FormControl(categoryGroup.name),
      userId: new FormControl(categoryGroup.id)
    });

    categoryGroup.categories.map(((category) => {
      (this.form.get('categories') as FormArray).push(new FormGroup({
        name: new FormControl(category.name),
        description: new FormControl(category.description),
        categoryGroupId: new FormControl(categoryGroup.id),
        id: new FormControl(category.id)
      }));
    }));
  }

  getCategories(): FormGroup[] {
    return (this.form.get('categories') as FormArray).controls as FormGroup[];
  }
}
