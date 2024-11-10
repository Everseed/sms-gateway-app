import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    /* canActivate: [authGuard] */
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: 'errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}