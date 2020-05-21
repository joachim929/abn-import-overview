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
import { EditCategoryGroupComponent } from './components/edit-category-group/edit-category-group.component';


@NgModule({
  declarations: [
    CategoriesMasterComponent,
    AddCategoryGroupComponent,
    CategoryListComponent,
    EditCategoryGroupComponent
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
    MatCardModule
  ]
})
export class CategoriesModule {
}
