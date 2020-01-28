import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubModule} from './sub/sub.module';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {AuthService} from './services/auth.service';


const routes: Routes = [
  {path: '', loadChildren: () => import('./sub/sub.module').then(m => SubModule)},
  {path: '404', component: NotFoundComponent, canActivate: [AuthService]},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
