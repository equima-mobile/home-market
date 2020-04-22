import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MespreferencesPageRoutingModule } from './mespreferences-routing.module';

import { MespreferencesPage } from './mespreferences.page';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MespreferencesPageRoutingModule,
    TranslateModule
  ],
  declarations: [MespreferencesPage]
})
export class MespreferencesPageModule {}
