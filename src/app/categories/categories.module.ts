import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesMasterComponent } from './components/categories-master/categories-master.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CategoriesMasterComponent, CategoryDetailComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
