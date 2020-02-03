import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';
import {OldComponent} from './components/old/old.component';
import {HttpClientModule} from '@angular/common/http';
import { FormBaseComponent } from './components/form-base/form-base.component';

@NgModule({
  declarations: [
    AppComponent,
    OldComponent,
    FormBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
