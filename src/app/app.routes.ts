import { Routes } from "@angular/router";
import { AuthenticationGuardService } from './services/authentication-guard.service';

import { LoginComponent } from "./login/login.component";
import { QuestionNaireComponent } from './question-naire/question-naire.component';
import { QuestionNaireMComponent } from './question-naire-m/question-naire-m.component';
import { QuestionNaireEnComponent } from './question-naire-en/question-naire-en.component';
import { QuestionNaireEnMComponent } from './question-naire-en-m/question-naire-en-m.component';

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
    path: 'question-naire-m',
    component: QuestionNaireMComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'question-naire-en',
    component: QuestionNaireEnComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'question-naire-en-m',
    component: QuestionNaireEnMComponent,
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
