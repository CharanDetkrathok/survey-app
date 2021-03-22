
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorAnotherComponent } from './error-another.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorAnotherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorAnotherRoutingModule { }
