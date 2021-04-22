import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorEnAnotherComponent } from './error-en-another.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorEnAnotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorEnAnotherRoutingModule { }
