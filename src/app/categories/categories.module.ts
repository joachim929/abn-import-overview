import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesMasterComponent } from './components/categories-master/categories-master.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddCategoryGroupComponent } from './components/add-category-group/add-category-group.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditCategoryGroupComponent } from './components/edit-category-group/edit-category-group.component';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { DeleteCategoryGroupComponent } from './components/delete-category-group/delete-category-group.component';
import { CategoryListComponent } from './components/category-list/category-list.component';


@NgModule({
  declarations: [CategoriesMasterComponent, CategoryDetailComponent, AddCategoryComponent, AddCategoryGroupComponent, EditCategoryComponent, EditCategoryGroupComponent, DeleteCategoryComponent, DeleteCategoryGroupComponent, CategoryListComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        SharedModule,
        MatButtonModule
    ]
})
export class CategoriesModule { }
