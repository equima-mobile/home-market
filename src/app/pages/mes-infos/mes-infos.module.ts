import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesInfosPageRoutingModule } from './mes-infos-routing.module';

import { MesInfosPage } from './mes-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MesInfosPageRoutingModule
  ],
  declarations: [MesInfosPage]
})
export class MesInfosPageModule {}
