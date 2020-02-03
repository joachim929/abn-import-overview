import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DataNavComponent} from './components/data-nav/data-nav.component';
import {FormBaseComponent} from './components/form-base/form-base.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    DataNavComponent,
    FormBaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    DataNavComponent,
    FormBaseComponent
  ]
})
export class SharedModule {
}
