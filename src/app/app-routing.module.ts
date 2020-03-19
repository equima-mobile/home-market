import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
  },
  {
  path: 'home',loadChildren: './home/home.module#HomePageModule',canActivate: [AuthGuard]},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  {path: 'landing',loadChildren: './pages/landing/landing.module#LandingPageModule'},
  {path: 'dashboard',loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard]},
  {path: ':slug', loadChildren: './post/post.module#PostPageModule'},
  
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
