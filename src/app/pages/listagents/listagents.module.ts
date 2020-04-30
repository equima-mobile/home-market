import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagentsPageRoutingModule } from './listagents-routing.module';

import { ListagentsPage } from './listagents.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagentsPageRoutingModule,
    TranslateModule
  ],
  declarations: [ListagentsPage]
})
export class ListagentsPageModule {}
