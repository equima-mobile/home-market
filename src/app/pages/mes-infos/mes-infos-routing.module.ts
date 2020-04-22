import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesInfosPage } from './mes-infos.page';

const routes: Routes = [
  {
    path: '',
    component: MesInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesInfosPageRoutingModule {}
