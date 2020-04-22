import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MespreferencesPage } from './mespreferences.page';

const routes: Routes = [
  {
    path: '',
    component: MespreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MespreferencesPageRoutingModule {}
