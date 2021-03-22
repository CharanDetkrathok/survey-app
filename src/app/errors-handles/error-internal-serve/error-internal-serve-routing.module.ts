
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorInternalServeComponent } from './error-internal-serve.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorInternalServeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorInternalServeRoutingModule { }
