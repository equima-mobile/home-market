import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagentsPage } from './listagents.page';

const routes: Routes = [
  {
    path: '',
    component: ListagentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagentsPageRoutingModule {}
