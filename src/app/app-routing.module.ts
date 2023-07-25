import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./pages/user-lister/user-lister.module').then(m => m.UserListerModule) },
  { path: 'user/:userId', loadChildren: () => import('./pages/user-lister/single-user/single-user.module').then(m => m.SingleUserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
