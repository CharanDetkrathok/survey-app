import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorEnAnotherRoutingModule } from './error-en-another-routing.module';
import { ErrorEnAnotherComponent } from './error-en-another.component';


@NgModule({
  declarations: [ErrorEnAnotherComponent],
  imports: [
    CommonModule,
    ErrorEnAnotherRoutingModule
  ]
})
export class ErrorEnAnotherModule { }
