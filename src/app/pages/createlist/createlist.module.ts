import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatelistPageRoutingModule } from './createlist-routing.module';

import { CreatelistPage } from './createlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatelistPageRoutingModule
  ],
  declarations: [CreatelistPage]
})
export class CreatelistPageModule {}
