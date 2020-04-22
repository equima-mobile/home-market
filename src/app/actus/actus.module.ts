import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActusPageRoutingModule } from './actus-routing.module';

import { ActusPage } from './actus.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActusPageRoutingModule,
    TranslateModule
  ],
  declarations: [ActusPage]
})
export class ActusPageModule {}
