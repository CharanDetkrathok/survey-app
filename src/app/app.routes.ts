import { Routes } from "@angular/router";
import { AuthenticationGuardService } from './services/authentication-guard.service';

import { LoginComponent } from "./login/login.component";
import { QuestionNaireComponent } from './question-naire/question-naire.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'question-naire',
    component: QuestionNaireComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'errors-handles',
    loadChildren: () => import('./errors-handles/errors-handles.module').then(m => m.ErrorsHandlesModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
]
