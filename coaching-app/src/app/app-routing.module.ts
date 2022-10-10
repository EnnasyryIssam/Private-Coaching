import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpwdComponent } from './components/forgotpwd/forgotpwd.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminModule } from './modules/admin/admin.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'forgot-password',
    component: ForgotpwdComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'coach',
    loadChildren: () =>
      import('./modules/coach/coach.module').then((c) => c.CoachModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((u) => u.UserModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
