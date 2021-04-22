import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorEnInternalServerRoutingModule } from './error-en-internal-server-routing.module';
import { ErrorEnInternalServerComponent } from './error-en-internal-server.component';


@NgModule({
  declarations: [ErrorEnInternalServerComponent],
  imports: [
    CommonModule,
    ErrorEnInternalServerRoutingModule
  ]
})
export class ErrorEnInternalServerModule { }
