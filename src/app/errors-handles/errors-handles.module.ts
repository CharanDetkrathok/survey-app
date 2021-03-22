import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsHandlesRoutingModule } from './errors-handles-routing.module';
import { ErrorsHandlesComponent } from './errors-handles.component';

@NgModule({
  declarations: [ErrorsHandlesComponent],
  imports: [
    CommonModule,
    ErrorsHandlesRoutingModule
  ]
})
export class ErrorsHandlesModule { }
