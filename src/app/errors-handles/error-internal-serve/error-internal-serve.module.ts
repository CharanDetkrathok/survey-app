import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorInternalServeRoutingModule } from './error-internal-serve-routing.module';
import { ErrorInternalServeComponent } from './error-internal-serve.component';


@NgModule({
  declarations: [ErrorInternalServeComponent],
  imports: [
    CommonModule,
    ErrorInternalServeRoutingModule
  ]
})
export class ErrorInternalServeModule { }
