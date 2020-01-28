import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent
  ]
})
export class SharedModule {
}
