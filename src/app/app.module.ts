
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionNaireComponent } from './question-naire/question-naire.component';

import { NumberDirective } from './login/numbers-only.directive';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { QuestionNaireMComponent } from './question-naire-m/question-naire-m.component';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { QuestionNaireEnComponent } from './question-naire-en/question-naire-en.component';
import { QuestionNaireEnMComponent } from './question-naire-en-m/question-naire-en-m.component';

// เปลี่ยนภาษา TH - EN
export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, LoginComponent, QuestionNaireComponent, NumberDirective, ConfirmDialogComponent, QuestionNaireMComponent, QuestionNaireEnComponent, QuestionNaireEnMComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AutocompleteLibModule,
    MaterialModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    //// เปลี่ยนภาษา TH - EN
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  // { provide: LOCALE_ID, useValue: "th-TH" },
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  //// เปลี่ยนภาษา TH - EN
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "th"]);
    translate.setDefaultLang("th");
    translate.use("th");
  }

}


