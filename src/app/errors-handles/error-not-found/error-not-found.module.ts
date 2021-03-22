import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorNotFoundRoutingModule } from './error-not-found-routing.module';
import { ErrorNotFoundComponent } from './error-not-found.component';


@NgModule({
  declarations: [ErrorNotFoundComponent],
  imports: [
    CommonModule,
    ErrorNotFoundRoutingModule
  ]
})
export class ErrorNotFoundModule { }
