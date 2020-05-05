import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMessagePageRoutingModule } from './detail-message-routing.module';

import { DetailMessagePage } from './detail-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMessagePageRoutingModule
  ],
  declarations: [DetailMessagePage]
})
export class DetailMessagePageModule {}
