
import { Routes } from "@angular/router";
import { ErrorsHandlesComponent } from "./errors-handles.component";

export const routes: Routes = [
  {
    path: '',
    component: ErrorsHandlesComponent,
    children: [
      {
        path: 'error-not-found',
        loadChildren: () => import('./error-not-found/error-not-found.module').then(m => m.ErrorNotFoundModule)
      },
      {
        path: 'error-internal-server',
        loadChildren: () => import('./error-internal-serve/error-internal-serve.module').then(m => m.ErrorInternalServeModule)
      },
      {
        path: 'error-another',
        loadChildren: () => import('./error-another/error-another.module').then(m => m.ErrorAnotherModule)
      }
    ]
  }
];
