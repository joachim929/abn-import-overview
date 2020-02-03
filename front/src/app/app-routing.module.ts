import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {ImportModule} from './import/import.module';
import {HintsModule} from './hints/hints.module';


const routes: Routes = [
  {path: '', redirectTo: '/imports', pathMatch: 'full'},
  {path: 'imports', loadChildren: () => import('./import/import.module').then(m => ImportModule)},
  {path: 'hints', loadChildren: () => import('./hints/hints.module').then(m => HintsModule)},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
