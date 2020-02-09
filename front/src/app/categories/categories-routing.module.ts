import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesMasterComponent} from './components/categories-master/categories-master.component';

const routes: Routes = [
  {path: '', component: CategoriesMasterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
