import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertiesPageRoutingModule } from './properties-routing.module';

import { PropertiesPage } from './properties.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertiesPageRoutingModule,
    TranslateModule
  ],
  declarations: [PropertiesPage]
})
export class PropertiesPageModule {}
