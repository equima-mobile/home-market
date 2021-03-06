import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'search-property',
  pathMatch: 'full'
  },
  {
    path: 'actus',
    children: [
      {
        path: '',
        loadChildren: './actus/actus.module#ActusPageModule'
      },
      {
        path: ':id',
        loadChildren: './post/post.module#PostPageModule'
      }
    ]
  },

  {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  {path: 'landing',loadChildren: './pages/landing/landing.module#LandingPageModule'},
  {path: 'dashboard',loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuard]},
  {
    path: 'property',
    children: [
      {
        path: '',
        loadChildren: './properties/properties.module#PropertiesPageModule'
      },
      {
        path: ':id',
        loadChildren: './pages/oneproperty/oneproperty.module#OnepropertyPageModule'
      }
    ]
  },
  {
    path: 'homeresult',
    children: [
      {
        path: '',
        loadChildren: './pages/homeresult/homeresult.module#HomeresultPageModule'
      },
    ]
  },
  {
    path: 'agent',
    children: [
      {
        path: '',
        loadChildren: './pages/listagents/listagents.module#ListagentsPageModule'
      },
      {
        path: ':id',
        loadChildren: './pages/agent/agent.module#AgentPageModule'
      }
    ]
  },
  {path: 'mesinfos',loadChildren: './pages/mes-infos/mes-infos.module#MesInfosPageModule'},
  {path: 'search-property',loadChildren:'./search-property/search-property.module#SearchPropertyPageModule'},
  {path: 'mespreferences',loadChildren:'./pages/mespreferences/mespreferences.module#MespreferencesPageModule'},
  {
    path: 'location',
    children: [
      {
        path: ':location',
        loadChildren: './pages/location/location.module#LocationPageModule'
      }
    ]
  },
  {path: 'mentions-legales',loadChildren:'./mentions-legales/mentions-legales.module#MentionsLegalesPageModule'},
  {path: 'message',loadChildren:'./pages/message/message.module#MessagePageModule'},
  {path: 'detail-message',loadChildren:'./pages/detail-message/detail-message.module#DetailMessagePageModule'},
  {path: 'support',loadChildren:'./pages/support/support.module#SupportPageModule'},

  
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
