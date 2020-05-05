import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMessagePage } from './detail-message.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMessagePageRoutingModule {}
