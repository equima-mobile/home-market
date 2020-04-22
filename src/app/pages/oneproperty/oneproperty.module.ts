import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnepropertyPageRoutingModule } from './oneproperty-routing.module';

import { OnepropertyPage } from './oneproperty.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnepropertyPageRoutingModule,
    TranslateModule
  ],
  declarations: [OnepropertyPage]
})
export class OnepropertyPageModule {}
