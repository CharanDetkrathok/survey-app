
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
      },
      {
        path: 'error-en-not-found',
        loadChildren: () => import('./error-en-not-found/error-en-not-found.module').then(m => m.ErrorEnNotFoundModule)
      },
      {
        path: 'error-en-internal-server',
        loadChildren: () => import('./error-en-internal-server/error-en-internal-server.module').then(m => m.ErrorEnInternalServerModule)
      },
      {
        path: 'error-en-another',
        loadChildren: () => import('./error-en-another/error-en-another.module').then(m => m.ErrorEnAnotherModule)
      }
    ]
  }
];
