import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ImportModule} from './import/import.module';
import {RulesModule} from './rules/rules.module';


const routes: Routes = [
  {path: '', redirectTo: '/imports', pathMatch: 'full'},
  {path: 'imports', loadChildren: () => import('./import/import.module').then(m => ImportModule)},
  {path: 'rules', loadChildren: () => import('./rules/rules.module').then(m => RulesModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
