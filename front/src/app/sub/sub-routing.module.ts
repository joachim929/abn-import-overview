import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubComponent} from './components/sub/sub.component';
import {TestComponent} from './components/test/test.component';


const routes: Routes = [
  {path: '', component: SubComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
