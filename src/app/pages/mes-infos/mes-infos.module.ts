import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesInfosPageRoutingModule } from './mes-infos-routing.module';

import { MesInfosPage } from './mes-infos.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MesInfosPageRoutingModule,
    TranslateModule
  ],
  declarations: [MesInfosPage]
})
export class MesInfosPageModule {}
