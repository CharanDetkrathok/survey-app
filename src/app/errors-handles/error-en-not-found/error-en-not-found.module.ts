import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorEnNotFoundRoutingModule } from './error-en-not-found-routing.module';
import { ErrorEnNotFoundComponent } from './error-en-not-found.component';


@NgModule({
  declarations: [ErrorEnNotFoundComponent],
  imports: [
    CommonModule,
    ErrorEnNotFoundRoutingModule
  ]
})
export class ErrorEnNotFoundModule { }
