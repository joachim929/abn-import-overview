import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesMasterComponent} from './components/categories-master/categories-master.component';
import {AddCategoryGroupComponent} from './components/add-category-group/add-category-group.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {EditCategoryGroupComponent} from './components/edit-category-group/edit-category-group.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesMasterComponent,
    children: [
      {
        path: '', component: CategoryListComponent
      },
      {
        path: 'add', component: AddCategoryGroupComponent
      },
      {
        path: 'edit/:id', component: EditCategoryGroupComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
