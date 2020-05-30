import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriesRoutingModule} from './categories-routing.module';
import {CategoriesMasterComponent} from './components/categories-master/categories-master.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {AddCategoryGroupComponent} from './components/add-category-group/add-category-group.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryGroupDetailComponent } from './components/category-group-detail/category-group-detail.component';
import {CategoryDataService} from './services/category-data.service';
import {CategoryFormService} from './services/category-form.service';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddCategoryComponent } from './components/add-category/add-category.component';


@NgModule({
  declarations: [
    CategoriesMasterComponent,
    AddCategoryGroupComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    CategoryGroupDetailComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [
    CategoryDataService,
    CategoryFormService
  ]
})
export class CategoriesModule {
}
