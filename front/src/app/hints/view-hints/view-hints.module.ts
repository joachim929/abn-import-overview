import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewHintsMasterComponent} from './components/view-hints-master/view-hints-master.component';
import {ViewHintsRoutingModule} from './view-hints-routing.module';


@NgModule({
  declarations: [ViewHintsMasterComponent],
  imports: [
    CommonModule,
    ViewHintsRoutingModule
  ]
})
export class ViewHintsModule {
}
