import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ImportModule} from './import/import.module';
import {RulesModule} from './rules/rules.module';
import {LandingComponent} from './core/components/landing/landing.component';
import {CategoriesModule} from './categories/categories.module';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'imports', loadChildren: () => import('./import/import.module').then(m => ImportModule)},
  {path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => CategoriesModule)},
  {path: 'rules', loadChildren: () => import('./rules/rules.module').then(m => RulesModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
