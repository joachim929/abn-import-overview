import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesMasterComponent} from './components/categories-master/categories-master.component';
import {AddCategoryComponent} from './components/add-category/add-category.component';
import {AddCategoryGroupComponent} from './components/add-category-group/add-category-group.component';
import {EditCategoryComponent} from './components/edit-category/edit-category.component';
import {EditCategoryGroupComponent} from './components/edit-category-group/edit-category-group.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesMasterComponent,
    children: [
      {
        path: 'add-category', component: AddCategoryComponent
      },
      {
        path: 'add-category-group', component: AddCategoryGroupComponent
      },
      /** todo: Prolly going to be using dialogs so these need to be children from the list route
       *    Seems the way to do this would be having a subscriber in the master component and opening the dialog once a certain route is called
       *      This means that any component dialog shouldn't be in routes as you don't actually want to route away from the list
       *    Another way to achieve this maybe is by putting a router outlet in a dialog itself, but
       *      that will involve picking up data from scratch
       */
      {
        path: 'category/:id', component: EditCategoryComponent
      },
      {
        path: 'category-group/:id', component: EditCategoryGroupComponent
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
