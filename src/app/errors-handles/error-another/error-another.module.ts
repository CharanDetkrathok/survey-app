import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorAnotherRoutingModule } from './error-another-routing.module';
import { ErrorAnotherComponent } from './error-another.component';


@NgModule({
  declarations: [ErrorAnotherComponent],
  imports: [
    CommonModule,
    ErrorAnotherRoutingModule
  ]
})
export class ErrorAnotherModule { }
