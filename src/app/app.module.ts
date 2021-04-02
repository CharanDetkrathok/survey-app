
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionNaireComponent } from './question-naire/question-naire.component';

import { NumberDirective } from './login/numbers-only.directive';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

function getLocale() {
  const locale = 'th';
  return `${locale}-u-ca-gregory`;
}

@NgModule({
  declarations: [AppComponent, LoginComponent, QuestionNaireComponent, NumberDirective, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AutocompleteLibModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "th-TH" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
