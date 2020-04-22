import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagentsPageRoutingModule } from './listagents-routing.module';

import { ListagentsPage } from './listagents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagentsPageRoutingModule
  ],
  declarations: [ListagentsPage]
})
export class ListagentsPageModule {}
