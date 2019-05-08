import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumericTextboxModule } from 'ngx-numeric-textbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from './curreny-mask.directive';
@NgModule({
  declarations: [
    AppComponent,
    CurrencyMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NumericTextboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
