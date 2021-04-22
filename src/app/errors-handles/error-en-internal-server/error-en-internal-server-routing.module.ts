import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorEnInternalServerComponent } from './error-en-internal-server.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorEnInternalServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorEnInternalServerRoutingModule { }
