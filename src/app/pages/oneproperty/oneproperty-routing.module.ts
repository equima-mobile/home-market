import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnepropertyPage } from './oneproperty.page';

const routes: Routes = [
  {
    path: '',
    component: OnepropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnepropertyPageRoutingModule {}
