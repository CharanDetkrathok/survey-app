import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorEnNotFoundComponent } from './error-en-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorEnNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorEnNotFoundRoutingModule { }
