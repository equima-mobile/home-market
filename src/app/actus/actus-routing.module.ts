import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActusPage } from './actus.page';

const routes: Routes = [
  {
    path: '',
    component: ActusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActusPageRoutingModule {}
