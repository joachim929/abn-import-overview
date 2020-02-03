import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HintFormComponent} from './components/hint-form/hint-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HintFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HintFormComponent
  ]
})
export class SharedModule { }
